# Guia de Configuração da Planilha e Google Apps Script

Este guia descreve como estruturar a planilha de conferência no Google Drive, implantar o código do Apps Script e carregar os dados de teste de 24 semanas para realizar a simulação de sincronização offline.

---

## 1. Criar a Planilha no Google Drive

1. Abra o [Google Sheets](https://sheets.google.com) e crie uma nova planilha em branco.
2. Dê um nome à planilha (ex: `Planilha de Visitas - Conferência SSVP`).
3. Renomeie a primeira aba ativa para **`Visitas`** (importante: o script fará a leitura e escrita nesta aba).
4. Na primeira linha (cabeçalho), crie exatamente as 5 colunas abaixo:
   *   `A1`: **`id`**
   *   `B1`: **`nome_assistido`**
   *   `C1`: **`nome_vicentino`**
   *   `D1`: **`data`**
   *   `E1`: **`relato`**

---

## 2. Inserir os Dados Iniciais de Teste (24 semanas)

1. Copie o bloco de texto CSV abaixo:

```csv
id,nome_assistido,nome_vicentino,data,relato
V_1,Família Santos,Antônio Silva,2026-08-08,Entrega da cesta de alimentos efetuada com sucesso. A avó está apresentando melhoras na sua mobilidade física.
V_2,Família Santos,Antônio Silva,2026-07-25,Conversamos sobre o andamento das consultas médicas. O Sr. José aguarda agendamento de especialidade na UBS.
V_3,Família Santos,Antônio Silva,2026-07-11,Visita de acompanhamento da reforma. O vazamento do banheiro foi resolvido pela equipe técnica.
V_4,Família Santos,Antônio Silva,2026-06-20,Primeira visita de acompanhamento periódico após triagem social inicial. Família acolhida com sucesso.
V_5,Família Santos,Antônio Silva,2026-05-30,Entrega de cesta básica e avaliação das condições de acessibilidade para a cadeira de rodas da avó.
V_6,Família Santos,Antônio Silva,2026-05-09,Conversa com o Sr. José sobre apoio na compra de remédios de hipertensão. Providenciado auxílio básico.
V_7,Família Santos,Antônio Silva,2026-04-18,Visita de apoio emocional. Conversamos sobre as dificuldades financeiras e orientamos sobre poupança doméstica.
V_8,Família Santos,Antônio Silva,2026-03-21,Visita para entrega de agasalhos e cobertores antes do início da frente fria.
V_9,Família Santos,Antônio Silva,2026-02-28,Visita de triagem e cadastramento da Família Santos no sistema de visitas do conselho vicentino.
V_10,Família Oliveira,Clara Souza,2026-08-10,Entrega dos remédios de uso diário. Condições habitacionais limpas e família em boa saúde.
V_11,Família Oliveira,Clara Souza,2026-07-27,Acompanhamento da família na assistência social municipal para liberação do auxílio de gás.
V_12,Família Oliveira,Clara Souza,2026-06-29,Visita de orientação nutricional com a mãe. Fornecido folheto educativo de receitas econômicas e saudáveis.
V_13,Família Oliveira,Clara Souza,2026-05-16,Entrega de leite em pó especial para o bebê. O ganho de peso da criança está dentro do esperado pela pediatra.
V_14,Família Oliveira,Clara Souza,2026-04-25,Entrega de fraldas e produtos de higiene infantil. A mãe agradeceu a doação da conferência vicentina.
V_15,Família Oliveira,Clara Souza,2026-03-07,Primeira visita da conferência. Acolhida da Família Oliveira e mapeamento de necessidades básicas imediatas.
V_16,Família Silva,Paulo Rezende,2026-08-05,Entrega de doações de roupas para as crianças e 3 caixas de leite. A mãe manifestou profundo agradecimento.
V_17,Família Silva,Paulo Rezende,2026-07-15,Entrega de fraldas descartáveis infantis e conversa de orientação de saúde bucal para os filhos.
V_18,Família Silva,Paulo Rezende,2026-06-06,Visita de acompanhamento da frequência escolar das crianças. Boletins com notas positivas.
V_19,Família Silva,Paulo Rezende,2026-05-02,Visita de rotina e entrega de cesta de alimentos. As crianças estão saudáveis.
V_20,Família Silva,Paulo Rezende,2026-04-11,Orientação jurídica simples com auxílio de vicentino profissional sobre regularização de certidão de nascimento.
V_21,Família Souza,Roberto Albuquerque,2026-08-12,Visita de acompanhamento escolar de rotina. Os filhos estão matriculados e frequentando as aulas normalmente.
V_22,Família Souza,Roberto Albuquerque,2026-07-03,Visita técnica para verificar as instalações elétricas da moradia. Sugerida manutenção preventiva básica.
V_23,Família Souza,Roberto Albuquerque,2026-05-23,Orientação profissional sobre vagas de emprego jovem aprendiz abertas no comércio local para o filho mais velho.
V_24,Família Souza,Roberto Albuquerque,2026-04-04,Entrega de cesta básica de mantimentos e produtos de limpeza para a residência.
V_25,Família Pereira,Marcos Lima,2026-08-03,Vistoria local de tubulação e saneamento básico efetuada. Encaminhada solicitação de reparo de esgoto.
V_26,Família Pereira,Marcos Lima,2026-06-22,Conversa com o Sr. Geraldo sobre capacitação profissional. Identificados cursos gratuitos de marcenaria locais.
V_27,Família Pereira,Marcos Lima,2026-05-09,Visita de apoio logístico. Organizado mutirão de limpeza do quintal para combater focos de dengue.
V_28,Família Pereira,Marcos Lima,2026-03-14,Acolhimento da Família Pereira no cadastro de assistência contínua do conselho vicentino.
```

2. Na sua planilha, clique na célula **`A1`** e cole o texto acima. O Google Sheets detectará automaticamente a quebra e organizará em colunas.
3. Copie a URL da barra de endereços do seu navegador (ex: `https://docs.google.com/spreadsheets/d/12345.../edit`). Você colará esse link no campo correspondente da nossa tela de teste.

---

## 3. Configurar o Google Apps Script

1. Na planilha, clique no menu superior em **Extensões ➔ Apps Script**.
2. Apague o código padrão `function myFunction() { ... }` que aparecer no arquivo `Código.gs`.
3. Cole o código JavaScript completo abaixo:

```javascript
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var list = [];
  
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      var headerName = headers[j];
      var val = row[j];
      if (val instanceof Date) {
        // Garante formatação universal YYYY-MM-DD para o JavaScript do celular
        val = Utilities.formatDate(val, Session.getScriptTimeZone(), "yyyy-MM-dd");
      }
      obj[headerName] = val;
    }
    list.push(obj);
  }
  
  return ContentService.createTextOutput(JSON.stringify({ status: "success", data: list }))
                       .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var action = payload.action;
    
    // Ação: CRIAR NOVA VISITA (Utilizada na Sincronização)
    if (action === 'create') {
      var id = "V_" + new Date().getTime() + "_" + Math.floor(Math.random() * 1000);
      var newRow = [];
      for (var j = 0; j < headers.length; j++) {
        var header = headers[j];
        if (header === 'id') newRow.push(id);
        else newRow.push(payload[header] || "");
      }
      sheet.appendRow(newRow);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Visita gravada!", id: id }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Ação: ATUALIZAR VISITA
    if (action === 'update') {
      var idToFind = payload.id;
      for (var i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(idToFind)) {
          for (var j = 1; j < headers.length; j++) {
            var header = headers[j];
            if (payload[header] !== undefined) {
              sheet.getRange(i + 1, j + 1).setValue(payload[header]);
            }
          }
          return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Visita atualizada!" }))
                               .setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Visita não encontrada." }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Ação: EXCLUIR VISITA
    if (action === 'delete') {
      var idToFind = payload.id;
      for (var i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(idToFind)) {
          sheet.deleteRow(i + 1);
          return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Visita excluída com sucesso!" }))
                               .setMimeType(ContentService.MimeType.JSON);
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Visita não encontrada." }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Ação não suportada." }))
                         .setMimeType(ContentService.MimeType.JSON);
                         
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Clique no ícone de disquete (Salvar projeto).

---

## 4. Implantar o Web App (Deploy)

1. No canto superior direito, clique no botão azul **Implantar ➔ Nova implantação**.
2. No menu lateral da engrenagem, selecione **App da Web**.
3. Configure os campos de implantação exatamente assim:
   *   **Descrição**: `API de Sincronização de Visitas`
   *   **Executar como**: `Eu` (seu e-mail)
   *   **Quem tem acesso**: `Qualquer pessoa` (importante: isso permite que o app faça chamadas HTTP sem login adicional).
4. Clique em **Implantar**.
5. Conceda as permissões de acesso da sua conta Google à planilha quando solicitado pelo pop-up de segurança.
6. Copie a **URL do URL do app da Web** gerada (ex: `https://script.google.com/macros/s/AKfycbz.../exec`).
7. Cole essa URL no campo "URL da API do Apps Script" do nosso webapp de testes.
