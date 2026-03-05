# s2e — LinkedIn · Análise de Recrutadores
## IDC [NOME_EMPRESA] · Coleta realizada em: [DATA]

> **Quando usar este template:** Apenas se o arquivo `s2_linkedin.md` desta empresa NÃO contém a seção "PARTE E". Se contém, o s2e já está coberto pelo s2.

---

## OBJETIVO

Coletar dados de recrutadores ativos da empresa para diagnosticar se ela **constrói ou compra talento** — sinal direto dos axiomas de Escala (E) e Diferencial (D4).

---

## BUSCA

Acesse o LinkedIn e busque:
```
"[NOME_EMPRESA]" → People → Current company → filtro: Recruiter / Talent Acquisition / People
```

URL de referência: https://www.linkedin.com/company/[LINKEDIN_SLUG]/people/

---

## PARTE E — 5 RECRUTADORES ATIVOS

| # | Nome (opcional) | Cargo | Perfis que busca/posta | Tom das postagens | Sinal IDC |
|---|---|---|---|---|---|
| 1 | | | | | ANDAIME / TETO / NEUTRO |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

**Legenda Sinal IDC:**
- **ANDAIME:** postam sobre desenvolvimento, crescimento, aprendizado, missão, carreira
- **TETO:** postam só sobre comp & benefits, urgência de vagas, perfil hiper-específico, "já pronto"
- **NEUTRO:** postagens neutras ou apenas institucionais

---

## ANÁLISE — CONSTRUIR vs. COMPRAR TALENTO

| Dimensão | Dado coletado |
|---|---|
| % vagas sênior externo ("já pronto") | __% |
| % vagas desenvolvimento (júnior/trainee/estágio) | __% |
| Tom predominante das postagens | Crescimento / Compensação / Impacto / Neutro |
| Cita empresa como escola/trampolim? | SIM / NÃO |
| Cita benefícios/comp como diferencial principal? | SIM / NÃO |

**Citação representativa de recrutador:**
> "___"

---

## ANÁLISE — CAÇA DE TALENTOS

A empresa usa recrutadores para abordar ativamente talentos de competidores?
- SIM / NÃO / NÃO IDENTIFICADO

Se SIM, quais empresas-alvo aparecem nos perfis recrutados:
___

---

## DIAGNÓSTICO IDC — EIXO RECRUTAMENTO

| Pergunta | Resposta | Sinal |
|---|---|---|
| Contrata para desenvolver ou para aproveitar? | Desenvolver / Aproveitar | E+ / E- |
| Linguagem de vagas exige conformidade? | SIM / NÃO | P- / P+ |
| Programa trainee/aprendiz ativo? | SIM / NÃO | D4+ / D4- |
| Recrutadores mencionam crescimento como diferencial? | SIM / NÃO | S+ / S- |

**Classificação geral (recrutadores):** ANDAIME / TETO / NEUTRO

**Como isso afeta a hipótese atual ([HIPÓTESE_EMPRESA]):**
___

---

## COMMITAR NO GITHUB

1. Navegue até:
```
https://github.com/ProsperWare/ascendimacy-idc/new/main/empresas/[SLUG_EMPRESA]
```
2. Nome do arquivo: `s2e_recrutadores.md`
3. Commit message: `coleta: [SLUG_EMPRESA]/s2e_recrutadores`

---

## PASSO 6 — VERIFICAR ATUALIZAÇÃO AUTOMÁTICA

Após o commit, o GitHub Actions atualiza `progresso.md` automaticamente.

1. Acesse: https://github.com/ProsperWare/ascendimacy-idc/actions
2. Confirme que o workflow **"Atualizar Progresso IDC"** rodou com ✅
3. Verifique que `s2e[x]` aparece na linha da empresa em `progresso.md`

Se o workflow não rodar em 2 minutos, acione manualmente:
- Aba Actions → "Atualizar Progresso IDC" → **Run workflow**

---

*s2e_linkedin_recrutadores.md · IDC [NOME_EMPRESA] · Ascendimacy*
