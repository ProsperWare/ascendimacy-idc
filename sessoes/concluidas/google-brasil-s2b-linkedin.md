# SESSÃO 2B — LINKEDIN: EX-COLABORADORES
## IDC Google Brasil · Coleta via Chrome

---

## SUA TAREFA

Analise o perfil LinkedIn de **15 ex-colaboradores do Google Brasil**, diversificando obrigatoriamente por função: **5-6 perfis de Engenharia/Produto**, **5-6 perfis de Vendas/Comercial/Marketing**, **3-4 de outras funções** (Jurídico, RH, Ops, Design). Ao final, commite no GitHub.

---

## CONTEXTO IDC ACUMULADO

**Classificação emergente: ANDAIME BIFURCADO**

**S1 — Glassdoor (confirmado):**
- Rating 4,6/5 · Saída 19/25 → **ANDAIME** (portabilidade excepcional)
- Teto de escala pós-L5/L6 — progressão bloqueada acima de certo nível
- Bifurcação confirmada: Tech/Product (ANDAIME) vs. Vendas/Jurídico/Suporte (TETO)
- Layoffs 2022-2024 visíveis indiretamente nas reviews

**S2a — LinkedIn Empresa (confirmado):**
- Mídia/Comunicação (~30%) supera Engenharia (~26%) no headcount global
- Engajamento SWE (3.268 reações) vs Account Manager (866) = diferencial de **3,8x** — o mercado confirma assimetria
- Silêncio total sobre layoffs/reestruturações nos posts públicos
- Programas rotativos (Genesis, ASAP) sinalizam portabilidade de entrada, não de carreira longa
- Employer branding de **atração**, não de retenção

---

## HIPÓTESES A TESTAR NESTA SESSÃO

**H1 — "Ex-Google SWE" vale mais que "Ex-Google Sales"?**
> Os ex-SWE/Engenheiros foram para onde? FAANG, startups de IA, unicórnios BR?
> Os ex-comerciais/vendas foram para onde? Outras big techs, consultorias, fora de tech?
> Se o destino pós-Google for radicalmente diferente por função → confirma bifurcação de portabilidade.

**H2 — Layoffs 2022-2024 visíveis nos perfis?**
> Há concentração de saídas entre 2022-2024 no headcount Brasil?
> Perfis com data de saída nesse período mencionam layoff explicitamente ou apenas "ex-Google"?
> Se SIM → a ruptura de contrato social está documentada nos perfis brasileiros.

**H3 — Tempo de casa por função**
> SWEs ficam mais ou menos que comerciais?
> Permanência curta em Tech (1,5-2 anos, sai para startup/FAANG) confirma andaime sem captura?
> Permanência longa em Comercial (3-5 anos) com destino fora de tech → confirma teto funcional?

**H4 — Tom das postagens retrospectivas**
> Ex-SWEs postam sobre saída com orgulho, aprendizado, "agora vou construir X"?
> Ex-comerciais postam com neutralidade ou silêncio sobre a experiência Google?
> A narrativa "ex-Google" é usada ativamente como credencial ou descrita como capítulo passado?

---

## PASSO 1 — NAVEGAR

URL de ex-colaboradores (requer login LinkedIn ou modo público):
```
https://www.linkedin.com/company/google/people/
```
Filtro: **Past company = Google** + **Localização = Brasil**

Ou busca direta:
```
"google" "brasil" OR "são paulo" past:1 -current site:linkedin.com/in/
```

---

## PASSO 2 — COLETAR 15 PERFIS

Para cada perfil registre:
- Nome (ou sigiloso se preferir)
- Cargo no Google (função + nível se visível)
- Período na empresa (anos + datas)
- Cargo atual (empresa + função + nível)
- Tom da postagem de saída (se existir): ORGULHO / NEUTRO / ALÍVIO / AMARGO / SILÊNCIO
- Portabilidade percebida: ALTA (FAANG/unicórnio/startup IA) / MÉDIA / BAIXA (fora de tech)

---

## PASSO 3 — ANÁLISE E HIPÓTESES

Ao concluir os 15 perfis, responda:
1. A bifurcação SWE vs Comercial é visível nos destinos pós-Google?
2. Há concentração de saídas no período de layoffs (2022-2024)?
3. O tempo médio de permanência difere por função?
4. "Ex-Google" funciona como credencial ativa ou símbolo passivo?

Commite com mensagem: `feat: google-brasil s2b linkedin ex-colaboradores [skip ci]`
