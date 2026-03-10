# IDC — Guia de Operação para Claude Code

> Este arquivo descreve como o Claude Code deve se comportar neste repositório.
> Leia inteiramente antes de qualquer ação.

---

## 1. O que é este projeto

O **Índice de Degralização Corporativa (IDC)** é uma pesquisa qualitativa que avalia se empresas
são ANDAIMES (crescem com seus participantes) ou TETOS (precisam mantê-los limitados).

O repositório armazena coletas brutas de dados (`empresas/`), briefings de sessão (`sessoes/`),
análises cruzadas (`analises/`) e o servidor de entrega (`coleta-server/`).

---

## 2. Papéis no sistema

| Papel | Quem | O que faz |
|---|---|---|
| **Agente de coleta** | Claude Chrome (browser) | Navega LinkedIn / Glassdoor / Reclame Aqui; entrega coleta via `coleta-server` |
| **Coordenador** | Claude Code (você) | Processa incoming, cria/atualiza arquivos de análise, mantém pipeline |
| **Pesquisador** | Usuário | Direciona hipóteses, aprova vereditos, valida sínteses |

Claude Code **não** navega a web. Apenas opera sobre arquivos locais e executa git.

---

## 3. Estrutura de diretórios

```
IDC/
├── empresas/                  # Coletas brutas processadas
│   ├── <empresa>/
│   │   ├── s1_glassdoor.md
│   │   ├── s2a_linkedin_empresa.md
│   │   ├── s2b_linkedin_excolaboradores.md
│   │   ├── s2c_linkedin_lideranca.md
│   │   ├── s2d_linkedin_vagas.md
│   │   ├── s2e_linkedin_recrutadores.md
│   │   ├── s3a_reclameaqui.md
│   │   ├── s3b_jusbrasil.md
│   │   └── s3c_investor_relations.md
│   └── uber-99/               # Atenção: 99/DiDi fica em uber-99/, não em 99/
├── sessoes/
│   ├── FILA.md                # Fila de sessões pendentes — manter atualizada
│   ├── <empresa>-<sessão>-<tipo>.md  # Briefings ativos
│   └── concluidas/            # Briefings de sessões já entregues
├── analises/                  # Sínteses comparativas e análises cruzadas
├── incoming/                  # Coletas recém-entregues pelo agente de campo
│   └── <sessao>_<YYYYMMDDTHHmmss>.md
├── coleta-server/             # Servidor Node.js de recepção
│   ├── server.js
│   ├── .env                   # NÃO commitar — contém GITHUB_TOKEN
│   ├── .env.example
│   └── public/index.html
├── metodologia/               # Definições conceituais do IDC
├── templates/                 # Modelos de arquivo
├── progresso.md               # Estado global de todas as coletas
├── README.md
└── CLAUDE.md                  # Este arquivo
```

---

## 4. Convenção de nomenclatura de sessões

| Código | Fonte |
|---|---|
| s1 | Glassdoor |
| s2a | LinkedIn · Empresa |
| s2b | LinkedIn · Ex-colaboradores |
| s2c | LinkedIn · Liderança |
| s2d | LinkedIn · Vagas |
| s2e | LinkedIn · Recrutadores |
| s3a | Reclame Aqui |
| s3b | Jusbrasil |
| s3c | Investor Relations |

---

## 5. Fluxo de trabalho padrão

### 5.1 Verificar status ao iniciar

```bash
git pull --rebase          # sempre puxar antes de qualquer trabalho
git status --short
ls incoming/               # ver coletas pendentes
```

Se `git pull` falhar por "unstaged changes":
```bash
git stash
git pull --rebase
git stash pop
git restore sessoes/FILA.md    # descartar conflito em FILA se necessário
```

### 5.2 Processar coletas em incoming/

Para cada arquivo `incoming/<sessao>_<ts>.md`:

1. Ler o arquivo completo
2. Verificar se o arquivo de destino em `empresas/` já existe (`Test-Path`)
3. Se não existe: criar `empresas/<empresa>/<sessao>_<tipo>.md` com a análise
4. Se já existe: verificar se há dados novos e apenas fazer patch (não sobrescrever)
5. Atualizar `progresso.md` — marcar sessão como `[x]`
6. Atualizar `sessoes/FILA.md` — remover a entrada da sessão concluída
7. Mover o briefing para `sessoes/concluidas/`
8. `git rm --cached incoming/<arquivo>` para desrastrear o arquivo processado
9. Commitar tudo

### 5.3 Formato do commit

```
coleta: <empresa> <sessao> <tipo curto>

- [resumo da análise em bullet points]
- progresso: <empresa> <sessao>[x]
- FILA: remove <empresa> <sessao>
```

Exemplos:
- `coleta: Ambev s2c LinkedIn Liderança`
- `coleta: 99 s2a LinkedIn Empresa + patches`
- `briefing: Correios s2a LinkedIn Empresa`

### 5.4 Ciclo completo de commit + push

```bash
git add <arquivos modificados>
git rm --cached incoming/<arquivos processados>
git commit -m "..."
git push
```

---

## 6. Regras de operação

### progresso.md
- Atualizar **sempre** após processar uma coleta
- Formato do grid: `EMPRESA s1[x] s2a[x] s2b[_] ...` — `[x]` commitado, `[_]` pendente, `[~]` parcial
- Adicionar entrada no histórico: `| YYYY-MM-DD | Empresa | sessão | status |`
- Verificar race conditions: puxar do remote pode trazer `[_]` que deveriam ser `[x]`

### FILA.md
- Remover entradas **somente após** o arquivo em `empresas/` estar commitado
- Nunca alterar o formato da tabela nem os prompts dos briefings ainda ativos
- A seção "Prompts prontos" deve estar em sincronia com a tabela

### incoming/
- Arquivos em `incoming/` são transitórios — não pertencem ao histórico do git
- Após processar: `git rm --cached incoming/<arquivo>` (o arquivo permanece em disco, só sai do tracking)
- Arquivos `teste.md`, `uber-s2b.md` etc. na pasta são artefatos antigos — ignorar

### Arquivos de análise em empresas/
- **Nunca sobrescrever** um arquivo existente sem comparar com o novo conteúdo
- Se o arquivo existe mas é pequeno (<5KB) ou incompleto, pode ser um placeholder — verificar
- Patches devem ser cirúrgicos: adicionar seção com dados novos, não reescrever seções existentes

---

## 7. coleta-server

O servidor Node.js em `coleta-server/` recebe coletas do agente de campo via HTTP POST e
commita diretamente no repositório GitHub via API (sem disco local).

```bash
# Iniciar o servidor
cd coleta-server
node server.js          # padrão: porta 8765

# Verificar se está de pé
curl http://localhost:8765/health
# ou no PowerShell:
(Invoke-WebRequest -Uri http://localhost:8765/health -UseBasicParsing).StatusCode
```

O servidor requer `coleta-server/.env` com:
```
GITHUB_TOKEN=ghp_SeuTokenAqui
GITHUB_REPO=ProsperWare/ascendimacy-idc
GITHUB_BRANCH=master
```

O arquivo `.env` **nunca deve ser commitado**. Use `.env.example` como referência.

Após reiniciar a máquina ou após longa pausa, verificar se o servidor está rodando antes
de orientar o agente de campo a entregar coletas.

---

## 8. Empresas e pastas especiais

| Empresa | Pasta |
|---|---|
| 99 / DiDi Brasil | `empresas/uber-99/` (não `empresas/99/`) |
| Uber | `empresas/uber/` |
| Mercado Livre | `empresas/mercado-livre/` |
| Porto Seguro | `empresas/porto-seguro/` |
| Magazine Luiza | `empresas/magazine-luiza/` |

---

## 9. Verificações antes de criar um briefing novo

Antes de criar `sessoes/<empresa>-<sessao>-<tipo>.md`:

1. Verificar se o briefing anterior da empresa existe em `sessoes/` ou `sessoes/concluidas/`
2. Ler o contexto acumulado (seção "O que já sabemos") do briefing anterior
3. Verificar se a coleta correspondente já existe em `empresas/`
4. Verificar Porto Seguro especificamente — s2b e s2c foram feitos remotamente (GitHub Actions, março 2026)

---

## 10. Estado atual do pipeline (março 2026)

Empresas com coleta completa: **Nubank, Itaú, WEG** (s1–s3c + síntese)

Empresas em progresso (sessões pendentes na FILA):

| Empresa | Próxima sessão |
|---|---|
| Ambev | s2c — LinkedIn · Liderança |
| Correios | s2a — LinkedIn · Empresa |
| Google Brasil | s2c — LinkedIn · Liderança |
| iFood | s2d — LinkedIn · Vagas |
| Magazine Luiza | s2b — LinkedIn · Ex-colaboradores |
| Petrobras | s2b — LinkedIn · Liderança |
| Porto Seguro | s2c — LinkedIn · Liderança (verificar se coleta já chegou) |

Consultar `sessoes/FILA.md` para a lista atualizada e os prompts prontos para o agente de campo.
