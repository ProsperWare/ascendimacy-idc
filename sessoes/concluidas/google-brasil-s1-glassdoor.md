# SESSÃO 1 — GLASSDOOR
## IDC Google Brasil · Coleta via Chrome

---

## SUA TAREFA

Navegue até o Glassdoor do Google Brasil, colete os dados agregados e analise as 30 reviews mais recentes. Ao final, commite o resultado no GitHub.

---

## CONTEXTO

Você está coletando dados para o **Índice de Degralização Corporativa (IDC)** — avalia se uma empresa é **ANDAIME** (prospera quando as pessoas crescem) ou **TETO** (precisa que fiquem pequenas).

**Hipótese para o Google Brasil:** ANDAIME BIFURCADO — a operação tech/product é genuinamente andaime, mas a camada de suporte/vendas/CS pode exibir dinâmicas de TETO por pressão de metas comerciais. A marca Google cria portabilidade excepcional, mas também pode gerar dependência de status ("ex-Google") que caracteriza aprisionamento suave.

**Contexto adicional:** Google Brasil tem sede em São Paulo (Faria Lima) e é uma das empresas mais desejadas por profissionais de TI no Brasil. Representam o padrão-ouro de employer branding tech. O estudo busca verificar se esse prestígio é substantivo (andaime real) ou performático (teto dourado). A operação de vendas/Large Customer Sales tem perfil diferente do engineering.

---

## PASSO 1 — NAVEGAR

Busque diretamente no Glassdoor:
```
https://www.glassdoor.com.br/Avaliações/Google-Avaliações-E9079.htm
```

Se não funcionar, tente:
```
https://www.glassdoor.com/Reviews/Google-Reviews-E9079.htm
```

Alternativa: busque **"Google Brasil avaliações"** no glassdoor.com.br  
Importante: filtrar por **localização = Brasil** para capturar experiências da operação local.

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
| Proporcionalidade | microgestão, metas impossíveis, sem autonomia | ownership, autonomia, impacto real |
| Escala | promoção política, ciclos de perf subjetivos | mobilidade interna, múltiplas trilhas |
| Saída | non-compete, "brand poisoning", medo de crítica | alumni ativo, portabilidade alta, referências |
| Diferencial | estagnação tecnológica, burocracia interna | tech de ponta, acesso a infra global |
| Consentimento | RTO forçado, changes sem consulta | transparência de decisão, town halls reais |
| Dissenso | eco chamber, Googlers silenciados, "be googley" | cultura de debate, feedback estruturado |

### Atenção especial — hipóteses a testar

**Evidências que CONFIRMARIAM andaime:**
- Mobilidade interna real entre times diferentes (não só lateralidade de cargo)
- Reviews de ex-funcionários agradecendo formação e abertura de portas
- Críticas construtivas aceitas sem penalização (reviews que citam feedback aberto)
- Engenheiros e PMs com autonomia real sobre roadmap
- Diversidade mencionada com substância (não só discurso)

**Evidências que FALSIFICARIAM a hipótese (buscar ativamente):**
- Bifurcação entre engenharia (ANDAIME) e vendas/CS (TETO) — metas agressivas em LCS
- "Googler" como identidade que dificulta saída = aprisionamento por status
- Layoffs em Brasil (2023–2024) tratados de forma opaca = D-?
- Promoção L6+ praticamente impossível no Brasil = escala truncada
- Reviews de áreas de suporte ao cliente com dinâmica radicalmente diferente

**Bifurcações a testar:**
1. Engenharia/PM vs. Vendas/LCS — se existir, score por área
2. Contratados/vendors (terceirizados) vs. FTE — frequente no Google global

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
https://github.com/ProsperWare/ascendimacy-idc/new/main/empresas/google-brasil
```

2. Nome do arquivo: `s1_glassdoor.md`
3. Cole o Markdown completo preenchido
4. Commit message: `coleta: google-brasil/s1_glassdoor`
5. Clique em **Commit changes**

---

*Sessão 1 · IDC Google Brasil · Glassdoor*
