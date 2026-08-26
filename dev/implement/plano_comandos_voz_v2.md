# Plano de Implementação - Comandos de Voz Estendidos e Teclado Híbrido (v2.0)

Este documento especifica a arquitetura e comportamento do protótipo de comandos de voz inteligentes, busca gratuita no Google Maps e controle de teclado virtual no Webapp da SSVP.

---

## 1. Escopo e Objetivos

O objetivo deste protótipo é testar e validar o processamento local de voz em navegadores móveis (SpeechRecognition API), separando comandos de controle do app de inserção de anotações comuns. O app deve:
1. Bloquear o teclado virtual móvel por padrão quando o usuário estiver usando entrada de voz (evitando perda de área visual no **Moto E7**).
2. Processar verbos específicos de comando (ex: "abrir", "ir", "mudar").
3. Integrar pesquisas abertas de locais por voz no Google Maps de forma gratuita (Search URLs).
4. Fornecer um tutorial ilustrado de aprendizagem para os vicentinos idosos.

---

## 2. Lógica e Mecanismo de Entrada Híbrida

### Teclado vs Voz
- **Estado Padrão (Voz):** Os inputs de observações possuem a diretiva `readonly`. Ao tocar rápido, o navegador não abre o teclado nativo e aciona a transcrição de voz (Speech-to-Text).
- **Entrada Manual (Teclado):** Se o usuário mantiver o dedo pressionado no input por 500ms (toque longo) ou escolher o botão "⌨️" nas opções, a propriedade `readonly` é removida temporariamente, focando no input e abrindo o teclado nativo.

---

## 3. Parser de Comandos de Voz (Gramática)

O aplicativo interpreta a frase transcrita. Se o primeiro termo coincidir com um dos verbos abaixo, executa-se a ação correspondente:

### Tabela de Verbos e Ações

| Verbo | Parâmetro Extra | Ação Executada |
| :--- | :--- | :--- |
| **ir** / **mostrar** | `pessoas`, `visitas`, `metas` | Rola a janela verticalmente até o módulo ativo correspondente. |
| **abrir** | `google maps` | Abre a rota de trânsito cadastrada para o card de dados ativo/focado. |
| **abrir** | `google maps para [local]` | Redireciona para `https://www.google.com/maps/search/?api=1&query=[local]` para busca gratuita local. |
| **modo** / **tela** | `claro`, `escuro` | Alterna o tema de cores do app. |
| **fonte** / **letra** | `grande`, `normal` | Configura a escala de texto do layout. |
| **canhoto** / **destro** | - | Inverte horizontalmente a posição dos botões da barra. |
| **ajuda** / **tutorial** | - | Exibe o painel de suporte. |

---

## 4. Estrutura do Novo Arquivo

- **Arquivo Target:** [ux_t2_barra_acessibilidade.html](file:///c:/webappssvp/webappssvp.github.io/testes/ux/barra_inferior/ux_t2_barra_acessibilidade.html)
- **Localização:** `testes/ux/barra_inferior/`
- **Metatags Open Graph:** Título configurado como `"Testes de Usabilidade"` para compartilhamento ideal no WhatsApp.
