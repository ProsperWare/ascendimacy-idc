# Política de Anonimização — IDC Ascendimacy
## Vigência: 2026-03-05

---

## REGRA GERAL

Dados pessoais identificáveis (nomes de pessoas) aparecem **apenas** nos arquivos intermediários de coleta. Nunca na síntese, nunca na análise cruzada, nunca em qualquer output publicável.

A análise é sempre **do sistema**, nunca do indivíduo.

---

## TABELA DE APLICAÇÃO

| Arquivo | Nomes de pessoas | Nomes de empresas |
|---|---|---|
| `s1_glassdoor.md` | NÃO (reviewers são anônimos na fonte) | SIM |
| `s2a–s2d_linkedin_*.md` | SIM (dados de trabalho interno) | SIM |
| `s2e_linkedin_recrutadores.md` | SIM (dados de trabalho interno) | SIM |
| `s2c_linkedin_lideranca.md` | SIM (dados de trabalho interno) | SIM |
| `s3a–s3c_*.md` | NÃO | SIM |
| `sintese.md` | **NUNCA** | SIM |
| `analises/*.md` | **NUNCA** | SIM |

---

## REGRAS DE SUBSTITUIÇÃO NA SÍNTESE

### Líderes
Referir por cargo, não por nome.
- ❌ `"Marcos Galperín publica perspectivas originais sobre mercado"`
- ✅ `"O CEO publica perspectivas originais sobre mercado"`

### Recrutadores
Referir por padrão agregado, não por indivíduo.
- ❌ `"Paloma Crociati demonstra crescimento real em 5 anos"`
- ✅ `"1 de 3 recrutadores demonstra trajetória de crescimento consistente na empresa"`

### Ex-colaboradores
Já são anônimos nos templates de coleta. Manter apenas área/função.
- ❌ `"R.C. (Operador Logístico, 3a9m)"`
- ✅ `"um ex-funcionário de Operações (tenure ~4 anos)"`

### Reviews do Glassdoor
Nunca identificar o reviewer. Sempre usar referência de área.
- ❌ `"um engenheiro sênior chamado João escreveu..."`
- ✅ `"um reviewer da área de Engenharia registrou..."`

---

## EXCEÇÃO — NOME DO CEO

O nome do CEO pode aparecer na síntese **somente** como referência factual pública:
- ✅ `"Aprovação do CEO (Fulano): 78%"` — referência de dado, não análise
- ❌ `"Fulano é um líder que tende a centralizar decisões"` — análise do indivíduo

---

## ARQUIVOS INTERNOS vs. PUBLICÁVEIS

**Internos (repo privado, nunca publicados diretamente):**
- `empresas/*/s2c_linkedin_lideranca.md`
- `empresas/*/s2e_linkedin_recrutadores.md`
- Quaisquer briefings em `sessoes/` e `sessoes/concluidas/`

**Publicáveis (devem estar limpos de PII):**
- `empresas/*/sintese.md`
- `analises/*.md`

---

## VALIDAÇÃO AUTOMÁTICA

O workflow `.github/workflows/health-check-anonimizacao.yml` roda a cada push em `empresas/**/sintese.md` ou `analises/**` e atualiza `analises/saude.md` com alertas de possíveis nomes pessoais detectados.

A detecção é **imperfeita** (regex de heurística) — os alertas requerem revisão humana.

---

*metodologia/politica_anonimizacao.md · IDC Ascendimacy · 2026-03-05*
