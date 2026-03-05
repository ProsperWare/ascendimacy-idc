# SESSÃO 2B — LINKEDIN: EX-COLABORADORES
## IDC [NOME_EMPRESA] · Coleta via Chrome

---

## SUA TAREFA

Analise 15 perfis de ex-colaboradores de [NOME_EMPRESA] no LinkedIn. Ao final, commite no GitHub.

---

## CONTEXTO

Coletando dados para o IDC. Foco no axioma de **Diferencial**: a empresa funciona como trampolim ou como teto para quem passa por ela?

---

## NAVEGAR

Busca no LinkedIn: "[NOME_EMPRESA]" → People → filtro "Past company"
Selecione os 15 que saíram mais recentemente.

---

## COLETAR

Para cada ex-colaborador:

**Ex-colaborador #[N]**
- Cargo na [NOME_EMPRESA]: ___
- Área: Tech / Operações / Comercial / Atendimento / RH / Outro
- Tempo na empresa: ___ anos
- Cargo seguinte: ___
- Empresa seguinte: ___
- Movimento: PROMOÇÃO / LATERAL / DESCIDA / EMPREENDEU / SEM ATIVIDADE
- Tom sobre a empresa (se visível): TRAMPOLIM / NEUTRO / TETO

---

Após os 15 perfis:

**CONTAGEM DE MOVIMENTOS:**
- PROMOÇÃO: ___/15
- LATERAL: ___/15
- DESCIDA: ___/15
- EMPREENDEU: ___/15
- SEM ATIVIDADE: ___/15

**CONTAGEM POR ÁREA DE ORIGEM:**
- Saíram de Tech: ___ → destino predominante: ___
- Saíram de Operações: ___ → destino predominante: ___
- Saíram de Comercial: ___ → destino predominante: ___
- Outros: ___ → destino predominante: ___

**TEMPO MÉDIO DE PERMANÊNCIA:** ___ anos

**PADRÃO DE LINGUAGEM:**
- TRAMPOLIM: ___/15
- NEUTRO: ___/15
- TETO: ___/15

**BIFURCAÇÃO POR ÁREA?** SIM / NÃO
- Se SIM: ___

**DESTINOS RECORRENTES (empresas que mais aparecem):** ___

---

## COMMITAR

GitHub: `empresas/[SLUG_EMPRESA]/s2b_linkedin_excolab.md`
Commit message: `coleta: [SLUG_EMPRESA]/s2b_linkedin_excolab`

---

## PASSO 6 — VERIFICAR ATUALIZAÇÃO AUTOMÁTICA

Após o commit, o GitHub Actions atualiza `progresso.md` automaticamente.

1. Acesse: https://github.com/ProsperWare/ascendimacy-idc/actions
2. Confirme que o workflow **"Atualizar Progresso IDC"** rodou com ✅
3. Verifique que `s2b[x]` aparece na linha da empresa em `progresso.md`

Se o workflow não rodar em 2 minutos, acione manualmente:
- Aba Actions → "Atualizar Progresso IDC" → **Run workflow**

---

*Sessão 2B · IDC [NOME_EMPRESA] · LinkedIn Ex-Colaboradores · ~15 min*
