# SESSÃO 1 — GLASSDOOR
## IDC iFood · Coleta via Chrome

---

## SUA TAREFA

Navegue até o Glassdoor do iFood, colete os dados agregados e analise as 30 reviews mais recentes. Ao final, commite o resultado no GitHub.

---

## CONTEXTO

Você está coletando dados para o **Índice de Degralização Corporativa (IDC)** — avalia se uma empresa é **ANDAIME** (prospera quando as pessoas crescem) ou **TETO** (precisa que fiquem pequenas).

**Hipótese para o iFood:** ANDAIME CAPTURADO BIFURCADO — o iFood tem dois mundos radicalmente distintos: (a) CLT tech/produto/dados/ops corporativos = potencialmente andaime, e (b) entregadores (regime PJ por app) = TETO máximo com captura algorítmica. O Glassdoor captura principalmente o mundo CLT, mas o estudo deve anotar o que vaza sobre entregadores. A empresa tem crescimento acelerado e ex-funcionários bem colocados no mercado (portabilidade tech alta).

**Contexto adicional:** iFood é a maior plataforma de delivery do Brasil (>300k entregadores, >300k restaurantes). Pertence ao grupo Prosus/Naspers. Sede em Osasco/SP (SP Campinas). Unicórnio consolidado. A discussão sobre trabalho de entregadores (vínculo empregatício, riscos, ganhos) é o maior ponto de litígio trabalhista latente da empresa. Para o IDC, o s1 mede CLT Glassdoor — o Jusbrasil (s3b) vai capturar a camada dos entregadores.

---

## PASSO 1 — NAVEGAR

Busque diretamente no Glassdoor:
```
https://www.glassdoor.com.br/Avaliações/iFood-Avaliações-E1006478.htm
```

Se não funcionar, tente buscar: **"iFood avaliações funcionários"** no glassdoor.com.br

---

## PASSO 2 — DADOS AGREGADOS

Colete e registre:

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
| Proporcionalidade | pressão constante, horas sem remuneração extra, reajuste abaixo da inflação | salário competitivo, equity, PLR real |
| Escala | crescimento travado pós-expansão, headcount congelado | múltiplas trilhas, IC track real, promoção por entrega |
| Saída | layoffs frequentes, empresa descarta rápido | alumni bem colocados, portabilidade alta, referências |
| Diferencial | produto maduro sem inovação, "só escalar" | dados únicos de delivery, ML aplicado, escala real |
| Consentimento | mudanças de estrutura sem aviso, reorg constante | roadmap claro, autonomia de time |
| Dissenso | cultura de concordância, feedback cosmético | debates reais, segurança psicológica |

### Atenção especial — hipóteses a testar

**Evidências que CONFIRMARIAM andaime CLT:**
- Ex-funcionários depois em Nubank, Mercado Livre, Rappi, Amazon = portabilidade alta
- Reviews de product/data com autonomia real e ownership de produto
- Salários comparam bem com mercado tech Brasil
- Mobilidade interna documentada dentro do iFood

**Evidências que FALSIFICARIAM / adicionariam complexidade:**
- Layoffs 2022–2024 tratados de forma opaca ou abrupta = D- possível
- Reviews de Ops/Logística (não entregadores, mas operadores CLT) com dinâmica de TETO
- Alta rotatividade em tech sugerindo burnout (andaime falso / TETO acelerado)
- Qualquer menção a entregadores por funcionários CLT (como esses funcionários veem a camada informal?)

**Bifurcações a testar:**
1. Tech/Produto/Dados vs. Ops/Logística/CS — esperada
2. Restaurantes (sellers B2B) como stakeholder visível ou invisível no discurso interno
3. Osasco (operações físicas) vs. remoto/híbrido (tech) — mesma empresa?

**Nota especial:** Se reviews mencionarem "parceiros" (entregadores) de forma positiva/justificativa, registre — indica naturalização ideológica. Se mencionarem de forma crítica, indica dissonância.

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
https://github.com/ProsperWare/ascendimacy-idc/new/main/empresas/ifood
```

2. Nome do arquivo: `s1_glassdoor.md`
3. Cole o Markdown completo preenchido
4. Commit message: `coleta: ifood/s1_glassdoor`
5. Clique em **Commit changes**

---

*Sessão 1 · IDC iFood · Glassdoor*
