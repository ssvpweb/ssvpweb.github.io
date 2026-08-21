# Plano de Implementação: Protótipo v5_mensagens.html (Mensagens Contextuais e Banners)

**Data:** 21 de Agosto de 2026  
**Status:** Planejado  
**Escopo:** `testes/ux/app/`

---

## 1. Objetivo
Criar a página `v5_mensagens.html` focada na exibição de mensagens contextuais inteligentes (preparação WiFi/offline, alertas de trânsito/proximidade) e banners de notificação ergonômicos deslizantes a partir da barra superior, otimizados para vicentinos idosos em trânsito.

---

## 2. Decisões de Design e Ergonomia

### A. Fluxo de Mensagens Contextuais (Simulado)
O protótipo simulará um ciclo contínuo de eventos reais de campo:
* **Fase 1 (Preparação/Offline):** "Sincronização Concluída: Histórico de visitas da Família Silva baixado com sucesso."
* **Fase 2 (Em trânsito/Aproximação):** "Você está a 5 minutos do destino (UBS Indianópolis)."
* **Fase 3 (Chegada/Lembrete):** "Você está chegando na casa da Família Silva. Lembrete: Levar cesta básica."

### B. Interface Visual (Banner Deslizante Superior)
* As mensagens não ficarão em um chat clássico, mas sim em um **Card/Banner deslizante** que desce suavemente da barra superior (`.bar-sup`).
* O banner terá tamanho de fonte elástico e cores de alto contraste de acordo com o tema.

### C. Acessibilidade Auditiva Inteligente (Chave de Áudio)
* Adicionaremos uma nova configuração no painel de Ajustes (Card da Esquerda): **"Falar mensagens automaticamente (Text-to-Speech)"** [Chave: Ativado / Desativado].
* Se ativado, o aplicativo lerá a notificação por voz (`SpeechSynthesis`) no momento exato em que o banner deslizar para baixo (útil se o vicentino estiver dirigindo).
* Se desativado, o banner aparecerá de forma silenciosa na tela.

---

## 3. Estrutura de Arquivos

### [NEW] `testes/ux/app/v5_mensagens.html`
* Interface com a barra superior indicadora e a barra inferior.
* Banner deslizante superior oculto (`#notification-banner`) posicionado logo abaixo da barra superior.
* Botões de simulação manual no display central para acionar cada mensagem (simulando WiFi, Trânsito e Chegada) para que o usuário possa testar e analisar.

### [MODIFY] `testes/ux/app/app.css`
* Estilos para o banner de notificação superior (`.notification-banner`, `.banner-show`, `.banner-hide`).
* Elementos visuais da chave de controle de fala (toggle/switch) no painel de configurações.

### [MODIFY] `testes/ux/app/app.js`
* Lógica para gerenciar a fila e animações de exibição do banner de notificação.
* Controle de leitura em áudio síncrona condicionada ao estado da chave de áudio selecionada.
