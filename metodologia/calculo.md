# Cálculo do IDC

> Documentação técnica da fórmula e dos critérios de pontuação.

---

## Fórmula Principal

```
IDC = (D1/35 × 25) + (D2/30 × 20) + (D3/35 × 20) + (D4/30 × 20) + (D5/30 × 15)
```

Onde:
- **D1** = Pontuação Dimensão 1 (RH & Glassdoor), max 35
- **D2** = Pontuação Dimensão 2 (LinkedIn), max 30
- **D3** = Pontuação Dimensão 3 (Modelo/IR), max 35
- **D4** = Pontuação Dimensão 4 (Reclame Aqui), max 30
- **D5** = Pontuação Dimensão 5 (Jusbrasil), max 30

**Resultado:** 0–100

---

## Tabela de Classificação

| Faixa IDC | Classificação | Significado |
|---|---|---|
| 80–100 | **ANDAIME** | A empresa genuinamente prospera com o crescimento humano |
| 60–79 | **ANDAIME COM RESSALVAS** | Tendência andaime, mas com contradições identificáveis |
| 40–59 | **ZONA CINZENTA** | Evidências mistas, diagnóstico inconclusivo |
| 20–39 | **TETO PROVÁVEL** | Tendência teto, mas com elementos positivos |
| 0–19 | **TETO TOTAL** | Modelo estruturalmente extrativista |

---

## Pesos das Dimensões

| Dimensão | Fonte | Peso | Justificativa |
|---|---|---|---|
| D1 — RH & Cultura | Glassdoor | 25% | Evidência direta de como trata pessoas internamente |
| D2 — Mobilidade | LinkedIn | 20% | Prova de mercado: quem saiu ficou melhor ou pior? |
| D3 — Modelo | IR/Annual Report | 20% | O modelo é estruturalmente compatível com andaime? |
| D4 — Clientes | Reclame Aqui | 20% | O andaime/teto se estende a quem não é CLT? |
| D5 — Legal | Jusbrasil | 15% | O comportamento de teto aparece em disputas jurídicas? |

---

## Critérios de Pontuação por Dimensão

### D1 — RH & Glassdoor (max 35)

| Item | Máximo | Critério |
|---|---|---|
| Rating geral e recomendação | 10 | Linear: rating/5 × 10 + %recomenda/100 × 5 |
| Ratings sub: carreira + liderança | 10 | Média × 2 |
| Análise qualitativa reviews (ANDAIME vs TETO) | 15 | % ANDAIME nas 30 reviews × 15 |

**Penalidades:**
- -5 se reviews revelam cultura de medo sistemático
- -3 se há bifurcação severa (ANDAIME para tech, TETO para operações)

### D2 — LinkedIn (max 30)

| Item | Máximo | Critério |
|---|---|---|
| Trajetória ex-colaboradores | 12 | % movimento ascendente × 12 |
| Qualidade alumni network | 8 | 0-8 julgamento qualitativo |
| Diversidade + liderança | 6 | 0-6 julgamento qualitativo |
| Padrão de vagas | 4 | Complementaridade vs. conformidade |

### D3 — Modelo/IR (max 35)

| Item | Máximo | Critério |
|---|---|---|
| Independência de lock-in estrutural | 15 | 0-15 análise modelo de negócio |
| Investimento em pessoas (programas, ESG) | 10 | 0-10 evidências quantitativas |
| Histórico de layoffs e recortes | 10 | 0-10 análise de narrativa |

### D4 — Reclame Aqui (max 30)

| Item | Máximo | Critério |
|---|---|---|
| Nota + taxa de resolução | 10 | Nota/10 × 5 + taxa/100 × 5 |
| Ausência de padrão abusivo | 15 | 0-15 análise qualitativa 20 reclamações |
| Tipo de reclamações | 5 | Operacional=5, Sistêmico/Estrutural=0 |

### D5 — Jusbrasil (max 30)

| Item | Máximo | Critério |
|---|---|---|
| Volume proporcional ao porte | 10 | Comparativo com setor |
| Ausência de assédio sistemático | 8 | 0-8 análise padrões |
| Ausência de PJ forçado/vínculo mascarado | 7 | 0-7 análise padrões |
| Ausência de horas extras sistêmicas | 5 | 0-5 análise padrões |

---

## Modificadores Especiais

### Modificador D- (Domínio)

Se D- for confirmado (2+ critérios positivos no checklist de seletividade):

1. **Reclassificar tipo** como ANDAIME CAPTURADO, independente do IDC
2. **Penalidade de 10 pontos** no IDC final
3. **Destacar** na síntese qual é o grupo/domínio onde o teto se aplica

### Modificador de Dados Insuficientes

Se uma dimensão tiver dados insuficientes (ex: empresa sem RI público):
- Substituir pelo peso médio das dimensões disponíveis
- Documentar explicitamente na síntese como limitação

---

## Limitações e Cautelas

1. **O IDC não é absoluto.** É um diagnóstico baseado em dados públicos com limitações inerentes.

2. **Viés de survivorship no Glassdoor.** Reviews tendem a ser escritas por quem tem sentimento forte (positivo ou negativo). Normalizar pelo N.

3. **Dados de LinkedIn são amostras.** Os 15 ex-colaboradores coletados podem não ser representativos.

4. **IR/RI não conta toda a história.** Relatórios anuais são documentos de marketing. Cruzar sempre com Jusbrasil e Glassdoor.

5. **Reclame Aqui tem viés de formalização.** Consumidores de baixa renda reclamam menos. Pode subestimar problemas com populações vulneráveis.

6. **O IDC é uma fotografia, não um filme.** Empresas mudam sob nova liderança, sob crise, sob crescimento. Indicar sempre o período de coleta.

---

## Exemplo de Cálculo

```
Empresa hipotética "Acme Corp":

D1 = 27/35   →  27/35 × 25  =  19.3
D2 = 18/30   →  18/30 × 20  =  12.0
D3 = 22/35   →  22/35 × 20  =  12.6
D4 = 20/30   →  20/30 × 20  =  13.3
D5 = 14/30   →  14/30 × 15  =   7.0
                              ───────
IDC =                          64.2   → ANDAIME COM RESSALVAS
```

---

*metodologia/calculo.md · IDC Ascendimacy*
