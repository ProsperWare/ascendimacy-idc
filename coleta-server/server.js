// IDC Coleta Server — recebe entregas do agente de campo (Claude Chrome)
// Grava diretamente no repositório GitHub via API (sem disco local).
//
// Variáveis de ambiente necessárias (arquivo .env ou shell):
//   GITHUB_TOKEN  — Personal Access Token com permissão repo:write
//   GITHUB_REPO   — ex: ProsperWare/ascendimacy-idc  (padrão já configurado)
//   GITHUB_BRANCH — ex: master  (padrão: master)
//
// Uso: node server.js [porta]   (padrão: 8765)

const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');
const { URLSearchParams } = require('url');

// Carrega .env se existir (sem dependências externas)
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf-8')
    .replace(/^\uFEFF/, '')          // strip UTF-8 BOM se presente
    .split(/\r?\n/).forEach(line => {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  });
}

const PORT          = parseInt(process.argv[2] || '8765', 10);
const GITHUB_TOKEN  = process.env.GITHUB_TOKEN  || '';
const GITHUB_REPO   = process.env.GITHUB_REPO   || 'ProsperWare/ascendimacy-idc';
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'master';

if (!GITHUB_TOKEN) {
  console.error('⚠️  GITHUB_TOKEN não definido. Crie coleta-server/.env com GITHUB_TOKEN=ghp_...');
  process.exit(1);
}

// ── HTML ───────────────────────────────────────────────────────────────────────
const HTML_FORM = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf-8');
function htmlSuccess(sessao, filepath) {
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<title>IDC · Entrega confirmada</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 640px; margin: 80px auto; padding: 0 24px; background: #f8fafc; color: #1e293b; }
  .box { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 40px; text-align: center; }
  h1 { font-size: 2rem; margin-bottom: 8px; color: #16a34a; }
  p { color: #475569; margin: 6px 0; }
  code { background: #f1f5f9; padding: 2px 8px; border-radius: 4px; font-size: 0.9em; }
  a { display: inline-block; margin-top: 14px; padding: 10px 22px; background: #0f172a; color: #fff; text-decoration: none; border-radius: 8px; font-size: 0.9em; }
</style></head><body>
<div class="box">
  <h1>✅ Entrega registrada</h1>
  <p>Sessão: <code>${escapeHtml(sessao)}</code></p>
  <p>Arquivo: <code>${escapeHtml(filepath)}</code></p>
  <p style="margin-top:20px; font-size:0.85em; color:#94a3b8;">
    O pesquisador irá processar este arquivo.<br>
    Você pode fechar esta aba.
  </p>
  <a href="/">← Nova entrega</a>
</div></body></html>`;
}

function htmlError(msg) {
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<title>IDC · Erro</title>
<style>body{font-family:system-ui,sans-serif;max-width:640px;margin:80px auto;padding:0 24px}</style>
</head><body><h2>⚠️ Erro</h2><p>${escapeHtml(msg)}</p><a href="/">← Voltar</a></body></html>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── GitHub API ────────────────────────────────────────────────────────────────
// Retorna o SHA do arquivo se ele já existir (para sobrescrever), ou null.
function getFileSha(filePath) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'User-Agent': 'idc-coleta-server/1.0',
        'Accept': 'application/vnd.github+json',
      },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try { resolve(JSON.parse(data).sha); } catch { resolve(null); }
        } else {
          resolve(null);
        }
      });
    });
    req.on('error', () => resolve(null));
    req.end();
  });
}

// Cria ou atualiza um arquivo no repositório via GitHub API.
function putFileOnGitHub(filePath, content, commitMsg, sha) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      message: commitMsg,
      content: Buffer.from(content, 'utf-8').toString('base64'),
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    });
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${GITHUB_REPO}/contents/${filePath}`,
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'User-Agent': 'idc-coleta-server/1.0',
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`GitHub API ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── segurança: sanitiza nome de sessão ────────────────────────────────────────
function sanitizeSessao(raw) {
  // permite apenas alfanumerico, hifens, underscores e pontos — sem path traversal
  return raw.replace(/[^a-zA-Z0-9\-_.]/g, '_').slice(0, 120);
}

// ── roteador ──────────────────────────────────────────────────────────────────
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // GET /
  if (req.method === 'GET' && url.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(HTML_FORM);
  }

  // GET /health  (para checar se está de pé)
  if (req.method === 'GET' && url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', port: PORT }));
  }

  // POST /submit
  if (req.method === 'POST' && url.pathname === '/submit') {
    let body = '';
    req.on('data', chunk => { body += chunk; if (body.length > 5_000_000) req.destroy(); });
    req.on('end', async () => {
      const params = new URLSearchParams(body);
      const sessao   = (params.get('sessao')   || '').trim();
      const empresa  = (params.get('empresa')  || '').trim();
      const conteudo = (params.get('conteudo') || '').trim();

      if (!sessao || !conteudo) {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(htmlError('Sessão e conteúdo são obrigatórios.'));
      }

      const safe     = sanitizeSessao(sessao);
      const filePath = `incoming/${safe}.md`;

      const header = conteudo.startsWith('#') ? '' :
        `# Coleta IDC — ${empresa || sessao}\n**Sessão:** ${sessao}  **Empresa:** ${empresa}\n**Recebido em:** ${new Date().toISOString()}\n\n---\n\n`;
      const finalContent = header + conteudo;

      try {
        const sha = await getFileSha(filePath);
        await putFileOnGitHub(
          filePath,
          finalContent,
          `incoming: ${safe}`,
          sha
        );
        console.log(`[${new Date().toISOString()}] ✅ GitHub ← ${filePath} (${finalContent.length} chars)`);
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(htmlSuccess(sessao, filePath));
      } catch (err) {
        console.error(`[${new Date().toISOString()}] ❌ GitHub API error:`, err.message);
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(htmlError(`Erro ao gravar no GitHub: ${err.message}`));
      }
    });
    return;
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`IDC Coleta Server rodando em http://0.0.0.0:${PORT}`);
  console.log(`Repositório destino: https://github.com/${GITHUB_REPO}/tree/${GITHUB_BRANCH}/incoming/`);
  console.log('Ctrl+C para parar.\n');
});
