# SESSÃO s1 — PORTO SEGURO: Glassdoor
## Briefing de campo · Produzir: `empresas/porto-seguro/s1_glassdoor.md`

---

## DADOS DA EMPRESA

| Campo | Valor |
|---|---|
| Empresa | Porto Seguro S.A. (Porto) |
| Setor | Seguros, saúde, serviços financeiros |
| Funcionários declarados | ~12.000 CLT (estimativa) |
| URL Glassdoor | `glassdoor.com.br/.../Porto-Seguro...E11654` |
| Hipótese IDC | ANDAIME (BIFURCADO leve) |

---

## CONTEXTO IDC

**Por que Porto Seguro?**

Porto Seguro foi adicionada ao corpus como empresa candidata a ANDAIME fora dos 6 setores clássicos (tech—telecom—saúde premium—cooperativa—industrial certificado—cosméticos). A hipótese é que a verticalização de serviços (Porto Bank, Porto Saúde, Porto Serviços, rede Troca Fácil) pode ter gerado mobilidade real entre áreas, criando andaime funcional.

**Comparativo de referência:** Itaú (BENEVOLENTE APRISIONADOR 56.8 IDC) — ambas empresas do setor financeiro/seguros. Se Porto Seguro tem menor captura que Itaú, o papel da verticalização e do tamanho menor seria confirmado.

**Contexto adicional:**
- CEO Marcelo Picanço com longa tenure interna — sinal de captura ou de estabilidade saudável?
- Rede Troca Fácil (prestadores de serviço) é EXTERNA ao perímetro CLT — bifurcação estrutural possível
- Porto Bank (fintech) pode ter atraído profissionais de portabilidade alta
- Múltiplos produtos (seguros, saúde, odonto, capitalização, serviços de emergência): mobilidade interna entre produtos?

---

## OBJETIVO DA SESSÃO s1

Coletar **30 reviews Glassdoor** — para testar se Porto Seguro opera como andaime genuíno, ou se a verticalização esconde aprisionamento parecido com o Itaú.

**Pergunta-guia:** A Porto Seguro retém pelo crescimento e portabilidade real, ou pelo pacote de benefícios/estabilidade como Correios/Itaú?

---

## HIPÓTESES A TESTAR

**H1 — Mobilidade interna real entre produtos/subsidiárias**
- Se ANDAIME: ex-analistas de seguros migraram para Porto Bank, Porto Saúde, Porto Serviços com promoção
- Se TETO: cada subsidiária tem silos fechados; mobilidade é transferência sem promoção (ou não existe)
- Verificar: reviews mencionam mobilidade interna como positiva e concreta? Ou apenas prometida sem entrega?

**H2 — Call center próprio: multifuncional ou baseado em script?**
- Porto Seguro tem operação de call center interna (não terceirizada — teste crucial)
- Se ANDAIME: call center treina para múltiplas funções (seguros, saúde, serviços), porta para outras áreas
- Se TETO: call center = script + meta de atendimento, igual a qualquer BPO terceiro
- Verificar: reviews de call center falam em crescimento ou em pressão/rotatividade?

**H3 — Rede Troca Fácil: aparece ou não nos reviews?**
- Troca Fácil = prestadores de serviço (serralheiros, borracheiros, vidraceiros etc.) — fora do CLT Porto
- Hipótese: não aparecem nos reviews do Glassdoor (são MEIs/autônomos, não funcionários)
- Se aparecerem: como se sentem em relação à Porto Seguro?

**H4 — CEO Marcelo Picanço: mencionado com qual tom?**
- Tenure longa do CEO pode ser sinal de cultura estável (andaime) ou de captura política (teto)
- Verificar: reviews mencionam CEO/liderança? Tom é de confiança, distância ou crítica?

---

## MÉTODO DE COLETA

### URL e dados agregados
- Acessar: `glassdoor.com.br/.../Porto-Seguro...E11654` (confirmar slug correto)
- Registrar: rating geral, total de reviews, sub-ratings (Cultura, D&I, Work-Life, Liderança, Remuneração, Carreira)
- Registrar: % recomenda, % aprovação CEO, % perspectiva positiva

### 30 reviews (mais recentes, ordenados por data)
Para cada review registrar no formato padrão IDC:

```
### Review [N]
- **Score:** X/5
- **Cargo/área:**
- **Status:** (atual/ex, tempo, cidade)
- **Data:**
- **Prós:**
- **Contras:**
- **Proporcionalidade:** ANDAIME / TETO / NEUTRO
- **Escala:** ANDAIME / TETO / NEUTRO
- **Saída:** ANDAIME / TETO / NEUTRO
- **Diferencial:** ANDAIME / TETO / NEUTRO
- **Consentimento:** ANDAIME / TETO / NEUTRO
- **Dissenso:** ANDAIME / TETO / NEUTRO
- **Citação-chave:**
```

---

## ANÁLISE A COMPLETAR

### Contagem por axioma (a preencher após 30 reviews)

| Axioma | ANDAIME | TETO | NEUTRO |
|--------|---------|------|--------|
| Proporcionalidade | — | — | — |
| Escala | — | — | — |
| Saída | — | — | — |
| Diferencial | — | — | — |
| Consentimento | — | — | — |
| Dissenso | — | — | — |

### Bifurcação por departamento (a verificar)
- Call center vs Gestão de produtos vs Tech (Porto Bank, digital)
- Troca Fácil vs CLT interno

---

## SÍNTESE A PREENCHER AO FINAL

```
## SÍNTESE IDC — PORTO SEGURO S1

**Hipóteses:**
- H1 (mobilidade interna real entre produtos/subsidiárias): [CONFIRMADA / REFUTADA / PARCIAL]
- H2 (call center: multifuncional ou script?): [CONFIRMADA / REFUTADA / PARCIAL]
- H3 (Rede Troca Fácil nos reviews): [APARECE / NÃO APARECE]
- H4 (CEO mencionado com qual tom): [CONFIANÇA / DISTÂNCIA / CRÍTICA / AUSENTE]

**Veredito emergente:** [ANDAIME / ANDAIME BIFURCADO / BENEVOLENTE APRISIONADOR / TETO / outro]

**Score IDC estimado:** [X/60 provisório]

**Bifurcação identificada:** SIM / NÃO — [descrição se SIM]

**Achado mais relevante desta sessão:** [parágrafo]
```

---

*Briefing preparado pelo agente Copilot · IDC Ascendimacy · 05/03/2026*
*Nova empresa — adicionada ao corpus como 13ª candidata (confirmada Mar 2026)*
*Hipótese: ANDAIME (BIFURCADO leve) — call center próprio + verticalização como teste chave*
*Comparativo: Itaú IDC 56.8 (BENEVOLENTE APRISIONADOR) — mesmo setor, tamanho e estrutura diferentes*

---

## PASSO FINAL — COMMIT

1. Navegue até:
```
https://github.com/ProsperWare/ascendimacy-idc/new/main/empresas/porto-seguro
```

2. Nome do arquivo: `s1_glassdoor.md`
3. Cole o Markdown completo preenchido
4. Commit message: `coleta: porto-seguro/s1_glassdoor`
5. Clique em **Commit changes**
