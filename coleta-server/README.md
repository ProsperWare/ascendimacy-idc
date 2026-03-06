# coleta-server

Servidor local para receber entregas de coleta do agente de campo (Claude Chrome).
Grava os arquivos **diretamente no repositório GitHub** via API — sem disco local.

## Setup (primeira vez)

```powershell
cd coleta-server
Copy-Item .env.example .env
# edite .env e coloque seu GITHUB_TOKEN
notepad .env
```

Gere o token em: https://github.com/settings/tokens  
Permissão necessária: **repo** (Contents: read & write)

## Uso

```powershell
cd coleta-server
node server.js
```

Acesse em `http://[nome-tailscale]:8765` ou `http://localhost:8765`.

## Fluxo

1. Agente Chrome termina a coleta
2. Navega até o servidor (Tailscale, localhost, ou qualquer URL acessível)
3. Preenche: **Sessão** + **Empresa** + **Conteúdo markdown**
4. Clica em "Entregar coleta"
5. Servidor chama GitHub API → cria `incoming/[sessao].md` direto no repositório
6. Pesquisador vê o arquivo no GitHub, processa e move para `empresas/` via Copilot

## Destino dos arquivos

`incoming/[sessao].md` no branch `master` do repositório configurado em `.env`.  
Copilot processa e move para `empresas/[slug]/[sessao].md` após revisão.

## Porta

Padrão: `8765`. Para mudar: `node server.js 9000`
