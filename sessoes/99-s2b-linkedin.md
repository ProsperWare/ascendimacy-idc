# SESSÃO s2b — 99 (DiDi Brasil): LinkedIn · Ex-colaboradores
## Documento a produzir (para entrega ao pesquisador): `empresas/uber-99/s2b_linkedin_excolaboradores.md`

---

## CONTEXTO ACUMULADO

### O que já sabemos (s1 + s2a)

**s1 Glassdoor (ANDAIME MODERADO C+ / pressão externa TETO via DiDi Beijing)**
- Rating 4,0/5 · 990 reviews · 76% recomenda · 63% perspectiva positiva
- "Zero autonomia e ambiente altamente tóxico" — Gerente de Projetos, 3 anos (R31)
- "Mudanças de rota muito frequente e liderança difusa" — Analista de Operações (R32)
- "Priorizações aos chineses podem acontecer" — Analista Júnior (R35)
- Cultura local brasileira positiva, salários bons, acesso a stakeholders
- TETO em: autonomia estratégica (Beijing decide), choques culturais, liderança difusa
- ANDAIME em: salário, dinamicidade, cultura micro-local, nome no currículo
- Fator único: **colonialismo corporativo digital** — liderança local sujeita a priorizações da DiDi

**s2a LinkedIn Empresa — achados-chave:**
- 388k seguidores · 10.042 usuários associados · 1.001–5.000 CLT declarados
- **Operações = 63% do headcount** (6.233) — contradiz narrativa "tech company"
- GM Simeng Wang: cargo = "General Manager at DiDi" (não "CEO da 99") · **feed completamente vazio**
- DiDi mencionada com orgulho seletivo: Ano Novo Chinês (679 reações), robotáxi Beijing
- Texto "Sobre": admite subordinação ("somos parte da DiDi Chuxing") + cancela ("autonomia para decidir")
- Motoristas praticamente invisíveis — aparecem marginalmente em 3/10 posts
- Funcionários se auto-identificam como "99/DiDi" nos cargos
- Crescimento +40% (12 meses) · Tempo médio 2,2 anos (alta rotatividade)
- Site de carreiras = careers.didiglobal.com (sem portal BR independente)
- **Prêmio Melhor Líder**: post mais engajado (1.580 reações) — celebração interna vs. "liderança difusa" no Glassdoor

---

## OBJETIVO DA SESSÃO s2b

Mapear onde **ex-colaboradores CLT da 99** foram trabalhar após sair — verificar se o "nome no currículo" (Glassdoor R31: "experiência valorizada") se traduz em portabilidade real, e se a pressão DiDi/Beijing gera êxodo para empresas com cultura mais autônoma.

**Pergunta-guia:** Quem sai da 99 vai para onde? A identidade "99/DiDi" é ativo ou passivo na carreira pós-saída?

**Pergunta secundária:** O tempo médio de 2,2 anos (s2a) reflete rotatividade forçada (layoffs, reestruturações DiDi) ou saída voluntária para oportunidades melhores?

---

## HIPÓTESES A TESTAR

**H1 — Ex-CLT tech 99 aterram em fintechs/big techs BR (portabilidade real)**
- Glassdoor: "experiência no currículo é valorizada" (R31), "empresa de tecnologia altamente considerada"
- Esperado: ex-Engineers/Data/Product 99 → Nubank, iFood, Mercado Livre, Uber, PicPay, startups
- Verificar: portabilidade real ou a identidade "99" é menos forte que "Uber" no mercado?

**H2 — Ex-CLT ops/comercial têm destino mais fraco**
- 63% do headcount é Operações (s2a) — maioria dos ex-funcionários vem desta camada
- Esperado: ex-Ops → outras plataformas (iFood, Rappi, Loggi), empresas tradicionais, cargo lateral
- Verificar: ascensão real ou movimentação horizontal entre gig platforms?

**H3 — Fuga da pressão DiDi detectável nos perfis**
- Glassdoor: "choques culturais", "priorizações aos chineses", ambiente tóxico
- Esperado: ex-funcionários que saíram de posições de interface com DiDi/Beijing mencionam busca por "autonomia" ou "cultura" no perfil seguinte
- Verificar: tom de saída — orgulho da 99, silêncio sobre DiDi, ou crítica implícita?

**H4 — Identidade "99" vs "DiDi" pós-saída: qual prevalece?**
- s2a: funcionários ativos usam "99/DiDi", "DiDi|99", "@99 (DiDi)" nos cargos
- Esperado: após sair, prevalecer "ex-99" (marca brasileira) sobre "ex-DiDi" (marca chinesa)
- Verificar: quem usa "ex-DiDi" no headline? Correlação com nível hierárquico ou função?

**H5 — Padrão de saída em ondas (reestruturações DiDi)**
- s2a: crescimento +40% recente, mas tempo médio 2,2 anos sugere rotatividade alta
- Verificar: há concentração de saídas em períodos específicos (2022 reestruturação DiDi global, 2024 cortes)?

---

## PROTOCOLO DE COLETA E ANONIMIZAÇÃO

**Ao assistente:** acesse os perfis públicos do LinkedIn conforme os grupos abaixo. Durante a coleta, você pode visualizar os dados completos internamente para classificar e inferir padrões. **Na saída** (tabela e análise), aplique anonimização:

- **Código:** substituir nome por `P01`, `P02`, etc.
- **Hash:** gerar SHA-256[:8] do slug LinkedIn de cada perfil — registrar no campo `Hash` para auditoria sem exposição de identidade
- Empresas e cargos de destino: manter intactos (são dados de mercado, não dados pessoais)

### Método de busca
- LinkedIn People: pastCompany=[99] ou pastCompany=[DiDi] + Brasil
- **Atenção:** A empresa aparece como "99" no LinkedIn (linkedin.com/company/99app). Buscar também por "DiDi" pois alguns funcionários listavam DiDi como empregador.
- Alvo: **15 ex-colaboradores confirmados**
- Distribuição obrigatória:
  - **Bloco A — Tech / Engenharia / Dados / Produto (HQ São Paulo):** 5 perfis
  - **Bloco B — Operações / Comercial / Account Management:** 5 perfis
  - **Bloco C — Corporativo (RH, Finanças, Marketing, Jurídico, Policy):** 3 perfis
  - **Bloco D — Liderança (Gerente+, Diretor, VP):** 2 perfis

---

## DADOS A COLETAR POR PERFIL

| Campo | Dados a registrar |
|---|---|
| Código | P01, P02, ... (substitui nome) |
| Hash | SHA-256[:8] do slug da URL LinkedIn |
| Cargo na 99 | Título exato + se listou como "99", "DiDi" ou "99/DiDi" |
| Bloco | A / B / C / D |
| Tempo na 99 | Menos de 2 anos / 2–3 anos / +3 anos |
| Ano de saída | 2022 / 2023 / 2024 / 2025 / 2026 |
| Empresa seguinte | Nome + setor |
| Cargo seguinte | Título exato |
| Tipo vínculo seguinte | CLT / PJ / Autônomo / Fundou startup |
| Mobilidade | Ascendente / Lateral / Descendente |
| Identidade pós-saída | Usa "ex-99" / "ex-DiDi" / nenhum no headline? |
| Tom de transição | ORGULHO / NEUTRO / SILÊNCIO / CRÍTICA |
| Observação | Padrão relevante, menção a cultura, autonomia, DiDi |

---

## TABELA DE PERFIS (preencher durante coleta)

| # | Código | Hash | Bloco | Cargo 99 | Tempo | Ano saída | Empresa seguinte | Cargo seguinte | Vínculo | Mobilidade | Identidade |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | P01 | — | — | — | — | — | — | — | — | — | — |
| 2 | P02 | — | — | — | — | — | — | — | — | — | — |
| 3 | P03 | — | — | — | — | — | — | — | — | — | — |
| 4 | P04 | — | — | — | — | — | — | — | — | — | — |
| 5 | P05 | — | — | — | — | — | — | — | — | — | — |
| 6 | P06 | — | — | — | — | — | — | — | — | — | — |
| 7 | P07 | — | — | — | — | — | — | — | — | — | — |
| 8 | P08 | — | — | — | — | — | — | — | — | — | — |
| 9 | P09 | — | — | — | — | — | — | — | — | — | — |
| 10 | P10 | — | — | — | — | — | — | — | — | — | — |
| 11 | P11 | — | — | — | — | — | — | — | — | — | — |
| 12 | P12 | — | — | — | — | — | — | — | — | — | — |
| 13 | P13 | — | — | — | — | — | — | — | — | — | — |
| 14 | P14 | — | — | — | — | — | — | — | — | — | — |
| 15 | P15 | — | — | — | — | — | — | — | — | — | — |

---

## DIMENSÕES DE ANÁLISE

### 1. Portabilidade por bloco

| Bloco | Função | Tenure médio | Destino típico | Portabilidade |
|---|---|---|---|---|
| A | Tech/Eng/Dados/Produto | — | Hipótese: fintechs/big techs BR | Hipótese: ALTA |
| B | Operações/Comercial | — | Hipótese: outras plataformas gig | Hipótese: MÉDIA |
| C | Corporativo (RH, Mkt, etc.) | — | Hipótese: empresas tradicionais | Hipótese: MÉDIA |
| D | Liderança (Gerente+) | — | Hipótese: scale-ups ou consulting | Hipótese: ALTA |

### 2. Identidade pós-saída: "99" vs "DiDi"

| Bloco | Usa "ex-99" | Usa "ex-DiDi" | Nenhum | Padrão |
|---|---|---|---|---|
| A (Tech) | — | — | — | Hipótese: "ex-99" prevalece |
| B (Ops) | — | — | — | Hipótese: "ex-99" prevalece |
| C (Corp) | — | — | — | — |
| D (Liderança) | — | — | — | Hipótese: "ex-DiDi" possível (interface com Beijing) |

### 3. Destinos esperados por bloco

- **Tech (A):** Nubank, iFood, Mercado Livre, Uber, PicPay, Creditas, Stone, startups de mobilidade/fintech
- **Operações (B):** iFood, Rappi, Loggi, 99Food concorrentes, empresas de logística, B2B SaaS
- **Corporativo (C):** consultorias, empresas tradicionais, outras techs BR de porte médio
- **Liderança (D):** scale-ups, VCs, consultorias estratégicas, outras plataformas LatAm

### 4. Padrão temporal de saídas

- **2022:** Reestruturação DiDi global pós-IPO cancelado — houve onda de saída no Brasil?
- **2023–2024:** Período de ajuste — cortes ou estabilização?
- **2025–2026:** Crescimento +40% — quem saiu durante expansão saiu por escolha?

---

## ANÁLISE A ESCREVER

*(Preencher após coleta)*

**Padrão Bloco A (Tech):**
- Empresas mais frequentes de destino:
- Mobilidade predominante:
- Portabilidade real vs. percebida:

**Padrão Bloco B (Ops/Comercial):**
- Empresas mais frequentes de destino:
- Mobilidade predominante:
- Observação:

**Padrão Bloco C (Corporativo):**
- Observação:

**Padrão Bloco D (Liderança):**
- Observação:
- Interface DiDi/Beijing visível na trajetória pós-saída?

**Identidade "99" vs "DiDi" pós-saída:**
- Padrão dominante:
- Exceções:

**Padrão temporal:**
- Ondas de saída detectadas?
- Correlação com eventos DiDi?

---

## SÍNTESE A PREENCHER AO FINAL

```
## SÍNTESE IDC — 99 (DiDi Brasil) S2B

**Hipóteses:**
- H1 (Ex-tech → big techs/fintechs BR — portabilidade real?): [CONFIRMADA / REFUTADA / PARCIAL]
- H2 (Ex-ops/comercial destino mais fraco?): [CONFIRMADA / REFUTADA / PARCIAL]
- H3 (Fuga da pressão DiDi detectável?): [CONFIRMADA / REFUTADA / PARCIAL]
- H4 (Identidade "99" vs "DiDi" pós-saída?): [resultado]
- H5 (Saídas em ondas — reestruturações DiDi?): [CONFIRMADA / REFUTADA / PARCIAL]

**Portabilidade por bloco:**
- Bloco A (Tech): [ALTA/MÉDIA/BAIXA]
- Bloco B (Ops): [ALTA/MÉDIA/BAIXA]
- Bloco C (Corp): [ALTA/MÉDIA/BAIXA]
- Bloco D (Liderança): [ALTA/MÉDIA/BAIXA]

**Classificação IDC:** ANDAIME MODERADO COM COLONIALISMO VISÍVEL [mantida / modificada: ...]

**Achado mais relevante desta sessão:** [parágrafo]

**Ironia a verificar:** A 99 diz "autonomia para tomar decisões" — quem saiu, foi para empresas com mais autonomia real? Se sim, a saída é o voto com os pés contra a narrativa.
```

---

---

## ARMAZENAR

Copie o conteúdo preenchido e envie para o servidor de coleta:

**URL:** `http://macproale.fox-escalator.ts.net:8765/`
**Arquivo destino:** `empresas/uber-99/s2b_linkedin_excolab.md`

---

*Briefing preparado pelo agente Coordenador · IDC Ascendimacy · 10/03/2026*
*Referência: s1 + s2a · 99 (DiDi Brasil) · Veredito provisório: ANDAIME MODERADO COM COLONIALISMO VISÍVEL*
*Contexto-chave: "Zero autonomia e ambiente altamente tóxico" (R31) vs. "autonomia para tomar decisões" (texto Sobre LinkedIn)*

