# Plano de Implementação - Modelagem de Planilhas Google Sheets e Sistema de Demonstração (v1.0)

Este plano descreve as modificações na estrutura de dados do banco de dados (Google Sheets) da SSVP, as regras de criação declarativa de tabelas com validação e proteção, e a introdução de uma planilha de testes configurada com checkboxes para carregar cenários fictícios de simulação de 6 meses de promoção humana.

## 1. Proposta do Esquema Declarativo JSON
O arquivo `dev_local/schema_planilha.json` será atualizado para refletir a nova modelagem relacional centrada no núcleo familiar e nos novos campos de escuta ativa na visita.

### Estrutura de Abas e Colunas Proposta:

```json
{
  "nome_documento": "Modelo de Planilha de Conferência SSVP",
  "versao": "2.0",
  "abas": {
    "familias": {
      "colunas": [
        { "nome": "id_familia", "tipo": "string", "protegida": true },
        { "nome": "nome_referencia", "tipo": "string" },
        { "nome": "endereco", "tipo": "string" },
        { "nome": "situacao_moradia", "tipo": "string", "validacao": ["Própria", "Alugada", "Cedida", "Invasão/Ocupação", "Sem Teto"] },
        { "nome": "saneamento_basico", "tipo": "string", "validacao": ["Sim", "Não"] },
        { "nome": "data_cadastro", "tipo": "date" },
        { "nome": "status", "tipo": "string", "validacao": ["Ativa", "Promovida", "Suspensa", "Desistente"] },
        { "nome": "renda_total", "tipo": "formula", "formula": "=ARRAYFORMULA(IF(ROW(A:A)=1; \"renda_total\"; SUMIF(pessoas!B:B; A:A; pessoas!J:J)))", "cor_fundo": "#F1F5F9", "protegida": true },
        { "nome": "total_membros", "tipo": "formula", "formula": "=ARRAYFORMULA(IF(ROW(A:A)=1; \"total_membros\"; COUNTIF(pessoas!B:B; A:A)))", "cor_fundo": "#F1F5F9", "protegida": true }
      ]
    },
    "pessoas": {
      "colunas": [
        { "nome": "cpf", "tipo": "string" },
        { "nome": "id_familia", "tipo": "string" },
        { "nome": "nome", "tipo": "string" },
        { "nome": "email", "tipo": "string" },
        { "nome": "telefone", "tipo": "string" },
        { "nome": "data_nascimento", "tipo": "date" },
        { "nome": "parentesco", "tipo": "string", "validacao": ["Chefe da Família", "Cônjuge", "Filho(a)", "Enteado(a)", "Avô/Avó", "Outro"] },
        { "nome": "escolaridade", "tipo": "string", "validacao": ["Analfabeto", "Fundamental Incompleto", "Fundamental Completo", "Médio Incompleto", "Médio Completo", "Superior"] },
        { "nome": "trabalho_ocupacao", "tipo": "string", "validacao": ["Desempregado", "CLT", "Informal/Bico", "Autônomo", "Aposentado", "Estudante"] },
        { "nome": "renda_mensal", "tipo": "float" },
        { "nome": "idade", "tipo": "formula", "formula": "=ARRAYFORMULA(IF(ROW(A:A)=1; \"idade\"; IF(F:F<>\u0022\u0022; INT((TODAY()-F:F)/365.25); \u0022\u0022)))", "cor_fundo": "#F1F5F9", "protegida": true }
      ]
    },
    "visitas": {
      "colunas": [
        { "nome": "id", "tipo": "string", "protegida": true },
        { "nome": "id_familia", "tipo": "string" },
        { "nome": "data", "tipo": "date" },
        { "nome": "hora_saida", "tipo": "string" },
        { "nome": "hora_chegada", "tipo": "string" },
        { "nome": "tempo_visita", "tipo": "integer", "cor_fundo": "#F1F5F9", "protegida": true },
        { "nome": "distancia_percorrida", "tipo": "float" },
        { "nome": "relato", "tipo": "string" },
        { "nome": "link_foto", "tipo": "string" },
        { "nome": "sentimento_predominante", "tipo": "string", "validacao": ["Esperançosa", "Ansiosa/Angustiada", "Triste/Desanimada", "Confiante/Agradecida", "Sob Forte Estresse/Conflito"] },
        { "nome": "queixas_desabafos", "tipo": "string" },
        { "nome": "sonhos_planos", "tipo": "string" }
      ]
    },
    "historico_auxilios": {
      "colunas": [
        { "nome": "id_auxilio", "tipo": "string", "protegida": true },
        { "nome": "id_familia", "tipo": "string" },
        { "nome": "data", "tipo": "date" },
        { "nome": "tipo_auxilio", "tipo": "string", "validacao": ["Cesta Básica", "Medicamento", "Conta de Consumo", "Material de Construção", "Curso Profissionalizante", "Tarifa de Transporte", "Outros"] },
        { "nome": "valor_estimado", "tipo": "float" },
        { "nome": "id_visita", "tipo": "string" }
      ]
    }
  }
}
```

---

## 2. Desenho do Script Apps Script para a Planilha de Testes (`SetupPlanilha.js`)
Será criado um script que automatiza o processo de setup, formatação e controle de cenários.

### Funções do Script:
1. **`setupPlanilhaDoSchema()`**: Lê a definição do JSON acima e cria as abas, cabeçalhos, congela a primeira linha, define as validações de dropdown e insere as `ARRAYFORMULA`s.
2. **`configurarPainelControle()`**: Cria a aba `painel_controle` contendo a lista de cenários de simulação e os respectivos checkboxes.
3. **`onEdit(e)`**: Monitora os checkboxes na aba `painel_controle`. Ao marcar um checkbox:
   - Limpa os dados das abas de trabalho (`familias`, `pessoas`, `visitas`, `historico_auxilios`).
   - Carrega as linhas de dados correspondentes ao cenário marcado, copiando-as a partir das abas de dados brutos ocultas (`data_silva`, `data_santos`, `data_oliveira`).
   - Garante que apenas um checkbox fique ativo por vez.

---

## 3. Criação da Massa de Dados de Demonstração (Mocks)
Será criado um arquivo JSON contendo os dados fictícios estruturados ao longo de 26 semanas (6 meses) para os três cenários:
* **Cenário Silva (Promoção Rápida)**
* **Cenário Santos (Auxílio Saúde e BPC)**
* **Cenário Oliveira (Instabilidade/Apoio Crônico)**

Estes dados serão importados para a planilha de testes nas abas de dados de backup ocultas (`data_silva`, `data_santos`, `data_oliveira`).

---

## 4. Integração Analítica no Webapp (Dashboard)
O webapp atuará de forma desacoplada, limitando-se a puxar as informações das tabelas ativas da planilha do Google Sheets via API.

### Recursos do Dashboard no Frontend:
1. **Painel de Autonomia:** Renderização de um gráfico SVG/CSS de linhas mostrando a curva de sentimentos da família ao longo do tempo (Mês 1 ao Mês 6).
2. **Gráfico de Custo-Benefício da Promoção:** Gráfico comparativo empilhando o total investido em auxílios (coluna `valor_estimado` na aba `historico_auxilios`) versus a evolução da renda familiar total (coluna `renda_total` na aba `familias`).
3. **Seção "Sussurros do Passado":** Exibição resumida e amigável da escuta da última visita (clima emocional, queixas e sonhos) para guiar e sensibilizar o vicentino antes de começar a nova visita de caridade.

---

## Plano de Verificação

### Verificação Manual
1. Criar uma nova planilha limpa no Google Sheets.
2. Rodar o script `SetupPlanilha.js` no Google Apps Script associado à planilha.
3. Verificar se as abas, as regras de dropdown, a formatação cinza das fórmulas e o congelamento de linhas foram aplicados perfeitamente.
4. Testar a proteção das células simulando edições manuais em colunas de fórmulas (como `idade` e `renda_total`) para verificar se o Google Sheets impede a digitação.
5. Marcar os checkboxes do painel de controle e confirmar se os dados nas tabelas ativas mudam conforme o planejado.
6. Abrir o Webapp local (usando Live Server do usuário) e verificar a renderização dos dados e gráficos analíticos.
