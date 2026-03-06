# SESSÃO 1 — GLASSDOOR
## IDC Uber / 99 · Coleta via Chrome

---

## SUA TAREFA

Navegue até o Glassdoor da Uber Brasil / 99 (Didi Brasil), colete os dados agregados e analise as 30 reviews mais recentes. Ao final, commite o resultado no GitHub.

---

## CONTEXTO

Você está coletando dados para o **Índice de Degralização Corporativa (IDC)** — avalia se uma empresa é **ANDAIME** (prospera quando as pessoas crescem) ou **TETO** (precisa que fiquem pequenas).

**Hipótese para Uber/99:** BIFURCAÇÃO EXTREMA — a mais aguda do estudo. (a) Funcionários CLT (tech, ops, marketing, policy): ANDAIME moderado com alta portabilidade; (b) Motoristas e entregadores (PJ via app): TETO com captura algorítmica, sem portabilidade, dependência de plataforma como único empregador de facto. O Glassdoor captura APENAS o mundo CLT — mas a empresa deve ser entendida como having two radically different labor realities. O IDC final precisará de nota metodológica explícita sobre esse limite.

**Contexto adicional:** Uber Brasil opera desde 2014, com escritório em São Paulo. A 99 (Didi Brasil) foi adquirida pela Didi Chuxing em 2018 e mantém marca separada. Ambas operam com motoristas PJ (sem vínculo empregatício reconhecido) — essa é a maior controvérsia trabalhista das plataformas de mobilidade no Brasil. Para o s1, focar nos reviews de funcionários CLT das operações corporativas. O Jusbrasil (s3b) vai capturar as ações de motoristas.

---

## PASSO 1 — NAVEGAR

**Para Uber Brasil:**
```
https://www.glassdoor.com.br/Avaliações/Uber-Avaliações-E575263.htm
```

**Para 99 / Didi Brasil:**  
Busque no glassdoor.com.br: **"99 tecnologia avaliações"** ou **"Didi Chuxing Brasil avaliações"**

Filtrar por **localização = Brasil** em ambos os casos.  
**Colete os dados de AMBAS as empresas** se houver reviews suficientes — registre qual é qual.

---

## PASSO 2 — DADOS AGREGADOS

Colete e registre (se possível, separar UBER e 99):

- Rating geral: ___/5 (total de reviews: ___)
- Cultura & Valores: ___/5
- Diversidade & Inclusão: ___/5
- Equilíbrio vida-trabalho: ___/5
- Alta liderança: ___/5
- Remuneração & Benefícios: ___/5
- Oportunidades de carreira: ___/5
- % Recomenda a um amigo: ___%
- % Aprovação do CEO: ___% (Nome: ___)
- Perspectiva positiva: ___%

---

## PASSO 3 — 30 REVIEWS MAIS RECENTES

Para cada review registre:
- Score: ___/5
- Cargo/área: ___
- **Empresa:** UBER / 99 (se misturado no mesmo perfil Glassdoor)
- Status: Atual / Ex
- Prós (1 frase): ___
- Contras (1 frase): ___
- Classificação por axioma:
  - Proporcionalidade: ANDAIME / TETO / NEUTRO
  - Escala: ANDAIME / TETO / NEUTRO
  - Saída: ANDAIME / TETO / NEUTRO
  - Diferencial: ANDAIME / TETO / NEUTRO
  - Consentimento: ANDAIME / TETO / NEUTRO
  - Dissenso: ANDAIME / TETO / NEUTRO
- Citação-chave: "___"

### Tabela de keywords para classificação

| Axioma | → TETO | → ANDAIME |
|---|---|---|
| Proporcionalidade | pressão de crescimento sem remuneração proporcional, equity inacessível | equidade competitiva, RSU para tech, salário de mercado |
| Escala | layoffs frequentes sem critério claro, crescimento travado pós-2022 | mobilidade interna, IC track, crescimento rápido em startup phase |
| Saída | demissão abrupta, reestruturação brusca | alumni bem colocados, "Uber no currículo" valorizado |
| Diferencial | "dados que não posso usar fora", NDA agressivo | dados únicos de mobilidade, escala que não existe em outro lugar |
| Consentimento | reorg sem aviso, RTO imposto, pivôs de produto sem consulta | autonomia de time, roadmap próprio |
| Dissenso | cultura americana imposta, "culture fit" = conformidade | diversidade real, vozes diversas na liderança Brasil |

### Atenção especial — hipóteses a testar

**Evidências que CONFIRMARIAM andaime CLT:**
- Ex-Uber indo para Nubank, Mercado Livre, iFood, startups = portabilidade alta
- Reviews de tech com autonomia real e stack moderna (Go, Python, dados de escala)
- Policy/Ops teams com impacto real em regulação pública
- Cultura diversa e latina genuinamente representada na liderança local

**Evidências que FALSIFICARIAM ou adicionariam complexidade:**
- Layoffs 2022–2023 tratados de forma abrupta = D- possível
- Qualquer menção a motoristas nos reviews CLT — como funcionários percebem a camada informal
- 99 vs. Uber: se 99 (cultura chinesa/Didi) tem dinâmica diferente de Uber (cultura americana)
- Decisões estratégicas impostas de fora do Brasil (HQ San Francisco / Didi Beijing) sem consulta ao BR

**Bifurcações a testar:**
1. Tech/Engenharia vs. Ops/Growth/Marketing — esperada
2. UBER (cultura americana) vs. 99 (cultura Didi/chinesa) — potencialmente fascinante
3. Funcionários CLT vs. menções a "parceiros" motoristas (linguagem que vaza nos reviews)

**Nota metodológica obrigatória na síntese:** O IDC desta empresa é incompleto sem dados dos motoristas/entregadores. O score de Glassdoor representa <5% da força de trabalho efetiva. Garantir nota na sintese sobre esse limite.

---

## PASSO 4 — CONTAGEM E ANÁLISE

Após as 30 reviews:

**Contagem por axioma:**

| Axioma | ANDAIME | TETO | NEUTRO |
|---|---|---|---|
| Proporcionalidade | | | |
| Escala | | | |
| Saída | | | |
| Diferencial | | | |
| Consentimento | | | |
| Dissenso | | | |

**Áreas mais TETO:** ___  
**Áreas mais ANDAIME:** ___  
**Bifurcação por departamento?** SIM/NÃO — detalhe: ___

**3 citações TETO mais reveladoras:**
1. "___"
2. "___"
3. "___"

**3 citações ANDAIME mais reveladoras:**
1. "___"
2. "___"
3. "___"

---

## PASSO 5 — COMMITAR NO GITHUB

1. Navegue até:
```
https://github.com/ProsperWare/ascendimacy-idc/new/main/empresas/uber-99
```

2. Nome do arquivo: `s1_glassdoor.md`
3. Cole o Markdown completo preenchido
4. Commit message: `coleta: uber-99/s1_glassdoor`
5. Clique em **Commit changes**

---

*Sessão 1 · IDC Uber / 99 · Glassdoor*
