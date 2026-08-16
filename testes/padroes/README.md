# Padrões Visuais e Templates de Teste - SSVP

Esta pasta contém os arquivos de modelo padrão para a criação de novos testes de funcionalidade e protótipos de UX para a SSVP. 

## Conteúdo da Pasta
* **`teste_padrao.html`**: O template HTML base que define a estrutura comum de identificação do teste, cards de instruções expansíveis, área central de testes e as premissas de acessibilidade.
* **`teste_padrao.css`**: Folha de estilo padrão contendo as variáveis de cores corporativas da SSVP (azul marinho, azul royal, branco, cinza), tipografia, estilos ergonômicos e animações de fechamento suave de painéis.

## Como criar um novo teste utilizando o padrão
1. Crie uma nova subpasta em `testes/` para o seu módulo (ex: `testes/novo_modulo/`).
2. Crie seu arquivo de teste (ex: `meu_teste_t1.html`) dentro da nova subpasta.
3. Importe o CSS padrão a partir do caminho relativo correto:
   ```html
   <link rel="stylesheet" href="../padroes/teste_padrao.css">
   ```
4. Baseie a estrutura do seu HTML no arquivo `teste_padrao.html` presente nesta pasta.
