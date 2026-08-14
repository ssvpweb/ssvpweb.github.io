# Plano de Implementação - Template de Teste Padrão SSVP

Este documento descreve a especificação técnica, escolhas de design, acessibilidade e reutilização do template padrão para testes do Webapp da SSVP.

## Objetivo
Estabelecer um padrão visual e funcional unificado para todos os novos protótipos de teste rápidos criados na pasta `testes/`. A consistência visual ajuda os testadores vicentinos a se familiarizarem com a interface do webapp, reduzindo o viés de aprendizagem entre testes diferentes.

## Componentes Criados

### 1. Folha de Estilo Compartilhada: [teste_padrao.css](file:///c:/webappssvp/webappssvp.github.io/testes/teste_padrao.css)
Contém o Design System básico e otimizado para o projeto SSVP:
- **Cores Oficiais SSVP**: Azul Escuro (`#002d62`) e Azul Royal (`#007fff`), com fundo suave em cinza claro (`#f8fafc`).
- **Reset Móvel Completo**: Toque rápido habilitado sem atraso visual no celular (`-webkit-tap-highlight-color`).
- **Card de Funcionalidade**: Estilizado com fundo navy (`#002d62`), texto branco de alto contraste (`#ffffff`) e alinhamento **centralizado** para garantir simetria visual absoluta na tela.
- **Card de Instruções**: Visual dinâmico usando animação via CSS Grid para expansão e recolhimento suaves. O uso da classe intermediária `.card-content { min-height: 0; }` garante que o padding interno seja totalmente ocultado ao fechar, resolvendo vazamentos visuais de texto.
- **Botão do Microfone**: Tamanho ampliado (64px de diâmetro) no centro da barra inferior fixa, com feedbacks visuais de pulsação e mudança de cor para o vermelho escuro (`#d32f2f`) ao estar ativo.

### 2. Template HTML Base: [teste_padrao.html](file:///c:/webappssvp/webappssvp.github.io/testes/teste_padrao.html)
Esqueleto HTML limpo que importa o CSS externo e implementa os blocos de forma semântica:
- **Header**: Título centralizado e limpo (sem rótulos adicionais como "Funcionalidade"), proporcionando o maior contraste e clareza possíveis para os vicentinos.
- **Card de Instruções**: Seção dinâmica configurada para **iniciar aberta por padrão** (`ativo` e `expanded` presentes no HTML), permitindo leitura imediata. Ao ser fechada pelo toque, encolhe revelando somente a barra de cabeçalho "Instruções do Teste".
- **Área de Teste (`.teste-container`)**: Espaço livre e flexível onde novos testes serão embutidos.
- **Barra de Acessibilidade com Botão do Microfone**: Fixada no rodapé para simulação de interações por voz.

---

## Como Reutilizar este Template para Novos Testes

Ao criar um novo teste (ex: `testes/teste_google_maps.html`):

1. **Copie a estrutura do arquivo** [teste_padrao.html](file:///c:/webappssvp/webappssvp.github.io/testes/teste_padrao.html).
2. **Atualize o cabeçalho**:
   ```html
   <div class="teste-versao">teste v1.3</div>
   <div class="card-funcionalidade">
     <h1 class="teste-funcionalidade">Minha Nova Funcionalidade</h1>
   </div>
   ```
3. **Preencha o card de instruções** com os passos adequados do seu teste.
4. **Substitua a div `.teste-placeholder`** pelo código real da funcionalidade que você deseja testar.
5. **Se o teste estiver em uma subpasta** (ex: `testes/ux/meu_teste.html`), lembre-se de ajustar o caminho de importação do CSS externo:
   ```html
   <link rel="stylesheet" href="../../teste_padrao.css">
   ```
