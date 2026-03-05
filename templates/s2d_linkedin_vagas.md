# SESSÃO 2D — LINKEDIN: VAGAS
## IDC [NOME_EMPRESA] · Coleta via Chrome

> **NOTA PARA ASSESSMENT POR ÁREA:** Colete vagas de áreas distintas (idealmente 3-4 Tech + 3-4 Ops + outras). Tom e requisitos variam por área e são a principal fonte do mini-IDC de vagas na síntese.

---

## SUA TAREFA

Analise 10 vagas abertas de [NOME_EMPRESA] no LinkedIn. Ao final, commite no GitHub.

---

## CONTEXTO

Coletando dados para o IDC. Foco: as vagas buscam conformidade (reproduzir o sistema) ou complementaridade (diversidade de perspectivas)?

---

## NAVEGAR

URL: https://www.linkedin.com/company/[LINKEDIN_SLUG]/jobs/
Ou busque: "[NOME_EMPRESA]" → Jobs

Diversifique: 3-4 tech, 3-4 operações/logística, 2-3 outras áreas.

---

## COLETAR

Para cada vaga:

**Vaga #[N]**
- Título: ___
- Área: Tech / Operações / Logística / Comercial / RH / Outro
- Nível: Jr / Pleno / Sênior / Liderança
- Requisitos proporcionais ao nível? SIM / INFLADOS / SUBQUALIFICADOS
- Linguagem: BUSCA CONFORMIDADE / BUSCA COMPLEMENTARIDADE / NEUTRO
- Palavras-chave culturais usadas: ___
- Menção a benefícios específicos? ___

---

Após as 10 vagas:

**CONTAGEM:**
- Requisitos proporcionais: ___/10
- Requisitos inflados: ___/10
- Busca conformidade: ___/10
- Busca complementaridade: ___/10
- Palavras-chave culturais mais frequentes: ___
- Diferença de tom tech vs. operações? SIM / NÃO
  - Se SIM: ___
- Benefícios mais mencionados: ___

---

## COMMITAR

GitHub: `empresas/[SLUG_EMPRESA]/s2d_linkedin_vagas.md`
Commit message: `coleta: [SLUG_EMPRESA]/s2d_linkedin_vagas`

---

## PASSO 6 — VERIFICAR ATUALIZAÇÃO AUTOMÁTICA

Após o commit, o GitHub Actions atualiza `progresso.md` automaticamente.

1. Acesse: https://github.com/ProsperWare/ascendimacy-idc/actions
2. Confirme que o workflow **"Atualizar Progresso IDC"** rodou com ✅
3. Verifique que `s2d[x]` aparece na linha da empresa em `progresso.md`

Se o workflow não rodar em 2 minutos, acione manualmente:
- Aba Actions → "Atualizar Progresso IDC" → **Run workflow**

---

*Sessão 2D · IDC [NOME_EMPRESA] · LinkedIn Vagas · ~10 min*
