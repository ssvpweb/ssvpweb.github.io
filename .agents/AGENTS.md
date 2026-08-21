# Regras de Codificação e Organização do Workspace

## Registro de Histórico de Chats
* Os chats e discussões importantes do projeto devem ser salvos como arquivos Markdown (`.md`) na subpasta `dev_local/chats/`.
* **Regra de Nomenclatura e Modificação:** 
  Se um arquivo de chat na pasta `dev_local/chats/` for modificado, ele deve ser renomeado para incluir a data da última modificação como prefixo no formato `AAMMDD_nome_do_arquivo.md` (onde AA é o ano com 2 dígitos, MM é o mês e DD é o dia). 
  * Exemplo: `nome_do_arquivo.md` ou `260810_nome_do_arquivo.md` vira `260811_nome_do_arquivo.md` se for editado em 11 de Agosto de 2026.


## Otimização de Processamento em Desenvolvimento
* **NÃO use o browser automatizado (subagente) para tirar capturas de tela ou screenshots**.
* Em vez de rodar simulações no navegador de IA, instrua o usuário a abrir a página com o Live Server local dele.
* Sempre detalhe no chat o que o usuário deve testar e analisar manualmente.


## Organização de Planos de Implementação
* **Planos Gerais e Funcionalidades:** Os planos de implementação (específicos de features, conjuntos de features ou o plano geral do webapp) devem ser salvos na pasta `dev/implement/` para subirem para o repositório público.
* **Segurança e Privacidade de Dados:** Qualquer plano de implementação que envolva segurança de dados, autenticação, criptografia, chaves de API, senhas ou privacidade de dados (LGPD) deve ser mantido estritamente na pasta `dev_local/` (evitando a exposição pública via `.gitignore`).
* **Ajustes Simples e Pequenos:** Para tarefas triviais, pequenos ajustes de layout, correções de sintaxe ou alinhamentos simples de CSS/JS que não envolvam grandes mudanças estruturais ou novas funcionalidades, o agente **NÃO deve criar planos de implementação (`implementation_plan.md`), listas de tarefas (`task.md`) ou walkthroughs (`walkthrough.md`)**. Nesses casos, o agente deve propor os snippets de alteração diretamente e aplicá-los após autorização rápida.

## Compatibilidade Multiplataforma (Android & iOS)
* **Prevenção de Zoom Automático (iPhone):** Todos os campos de formulário (`input`, `textarea`, `select`) devem ter tamanho de fonte mínimo de `16px` (ou `1rem`) em visualizações móveis para evitar que o Safari dê zoom de foco indesejado.
* **Margens de Segurança (Safe Areas):** Elementos fixados nas extremidades da tela (barras inferiores ou superiores) devem usar variáveis CSS `env(safe-area-inset-...)` para não serem cobertos pela barra de navegação virtual ou pelo entalhe (Notch) do iOS.
* **Políticas de Captura/Execução de Mídia:** Funcionalidades de Speech Recognition (Reconhecimento de Voz) ou áudio retorno (Speech Synthesis) devem ser acionadas estritamente de dentro de um evento de clique ou interação física ativa do usuário na tela, suportando os prefixos `window.webkitSpeechRecognition`.
* **Padrões de Dimensionamento (Unidades CSS):** Para garantir a acessibilidade de escala móvel para idosos, utilize preferencialmente a unidade `rem` para tamanhos de texto (`font-size`), espaçamentos (`padding`, `margin`) e alturas dinâmicas. Use `px` apenas para elementos de precisão física que não devem distorcer (como bordas de até `3px`, divisores e deslocamentos de sombra `box-shadow`). Evite o uso aninhado e complexo de `em`.
