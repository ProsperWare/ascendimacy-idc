# Índice de Degralização Corporativa (IDC)

> **"Todo teto um dia vira chão."** — Ascendimacy

---

## O que é o IDC?

O **Índice de Degralização Corporativa** avalia se empresas são:

- **ANDAIMES** — prosperam quando seus participantes crescem (funcionários, parceiros, clientes)
- **TETOS** — precisam que as pessoas sejam menos para funcionar

Não é ranking de felicidade corporativa. É diagnóstico estrutural de como o modelo de negócio e a cultura de uma organização se relacionam com o crescimento humano de quem passa por ela.

---

## As 5 Dimensões de Análise

| Dimensão | Fonte | Peso |
|---|---|---|
| RH & Cultura Interna | Glassdoor (s1) | 25% |
| Mobilidade & Liderança | LinkedIn (s2) | 20% |
| Relação com Clientes/Mercado | Reclame Aqui (s3a) | 20% |
| Estrutura de Poder Legal | Jusbrasil (s3b) | 20% |
| Modelo de Negócio | Investor Relations (s3c) | 15% |

---

## Os 5 Axiomas

| Axioma | Pergunta central |
|---|---|
| **Proporcionalidade (P)** | A limitação que impõe é efeito colateral ou mecanismo necessário? |
| **Escala (E)** | Preserva alternativas de transcendência para seus participantes? |
| **Saída (S)** | A saída real é fácil e não-punitiva? |
| **Diferencial (D4)** | Cria condições para que as pessoas desenvolvam seus diferenciais? |
| **Consentimento (C)** | A escolha de participar é genuinamente revisável? |

---

## Os 9 Tipos Taxonômicos

| Tipo | Perfil |
|---|---|
| ANDAIME PURO | P+ E+ S+ |
| TETO TOTAL | P- E- S- |
| GAIOLA DOURADA | P+ E+ S- |
| ARMADILHA ABERTA | P- E- S+ |
| BENEVOLENTE APRISIONADOR | P+ E- S- |
| DOMINANTE INOCENTE | P+ E- S+ |
| PARASITA TOLERÁVEL | P- E+ S+ |
| PREDADOR CONTIDO | P- E+ S- |
| ANDAIME CAPTURADO | P± E± S± D- (seletivo) |

---

## Cálculo do IDC

```
IDC = (RH/35 × 25) + (LinkedIn/30 × 20) + (Modelo/35 × 20) + (Cultura/30 × 20) + (Poder/30 × 15)
```

| Faixa | Classificação |
|---|---|
| 80–100 | ANDAIME |
| 60–79 | ANDAIME COM RESSALVAS |
| 40–59 | ZONA CINZENTA |
| 20–39 | TETO PROVÁVEL |
| 0–19 | TETO TOTAL |

---

## As 13 Empresas

| # | Empresa | Setor | Hipótese |
|---|---|---|---|
| 1 | Mercado Livre | Plataforma/Tech | Andaime Capturado |
| 2 | Nubank | Fintech | Gaiola Dourada? |
| 3 | Itaú Unibanco | Banco tradicional | Benevolente Aprisionador? |
| 4 | Google Brasil | Big tech global | Dominante Inocente? |
| 5 | Petrobras | Estatal/Energia | Benevolente Aprisionador |
| 6 | Porto Seguro | Seguros/Fintech | Andaime Bifurcado? |
| 7 | Magazine Luiza | Varejo | Andaime c/ Ressalvas? |
| 7 | iFood | Plataforma/Gig | Armadilha Aberta? |
| 8 | WEG | Indústria | Andaime Puro? |
| 9 | Ambev | Indústria/Bebidas | Predador Contido? |
| 10 | Correios | Estatal | Teto Provável? |
| 11 | McKinsey Brasil | Consultoria | Gaiola Dourada? |
| 12 | Uber | Gig economy | Armadilha Aberta? |
| 13 | 99 | Gig economy (Didi) | Armadilha Aberta? |

---

## Estrutura do Repositório

```
ascendimacy-idc/
├── README.md
├── metodologia/          ← Axiomas, taxonomia, checklist, cálculo
├── templates/            ← Templates de coleta por fonte
├── empresas/             ← Dados por empresa (s1–s3c + síntese)
├── progresso.md          ← Atualizado a cada execução
└── analises/             ← Rankings e análises cruzadas
```

---

## Ordem de Execução

```
BLOCO 1 (máximo contraste): Nubank → Itaú → WEG
BLOCO 2 (plataformas + cultura): iFood → Uber/99 → Ambev
BLOCO 3 (global + varejo): Google BR → McKinsey → Magazine Luiza
BLOCO 4 (estatais + refinamento): Petrobras → Correios → Mercado Livre (refinar)
```

Dentro de cada empresa: `s1 → s2 → s3a → s3b → s3c → síntese`

---

*Ascendimacy — ascendimacy.com*
