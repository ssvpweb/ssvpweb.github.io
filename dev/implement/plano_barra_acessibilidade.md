# Plano de Implementação - Barra Inferior de Acessibilidade

Este documento detalha o planejamento, arquitetura e evolução da **Barra Inferior de Acessibilidade e Ergonomia** para o Webapp da SSVP, otimizada para o dispositivo **Moto E7 (360px)**.

## 1. Visão Geral e Objetivos

A barra inferior de acessibilidade foi projetada especificamente para simplificar o aprendizado e uso do webapp por vicentinos idosos ou com limitações de destreza motora. Ela consolidará a interação por voz, tutoriais de viewport dinâmicos e customizações físicas de layout em uma barra ergonômica de 3 botões na base da tela.

---

## 2. Estrutura do Layout (3 Botões)

O layout é composto por três botões circulares proeminentes:
- **Botão Esquerdo (`+`):** Configurações e preferências de usabilidade.
- **Botão Central (Microfone):** Controle de voz inteligente (síntese e reconhecimento contextual).
- **Botão Direito (`?`):** Tutoriais interativos e dicas contextuais.

```
       [  Voz  ]
 [ + ]  (Centro)  [ ? ]
 (Esq)            (Dir)
========================
```

---

## 3. Fases de Implementação

### Fase 1: Fundações de Acessibilidade (v1.0 - Concluída)
- [x] Criação do arquivo de teste em [ux_v1_barra_acessibilidade.html](file:///c:/webappssvp/webappssvp.github.io/testes/ux/barra_inferior/ux_v1_barra_acessibilidade.html).
- [x] Painel Bottom Sheet de preferências (`+`) e Central de Ajuda (`?`).
- [x] Persistência local (`localStorage`) para:
  - Tamanho da fonte (Normal, Grande, Extra).
  - Tema (Claro / Escuro).
  - Orientação Manual (Destro / Canhoto).
- [x] Modo Canhoto que inverte horizontalmente a posição dos botões na barra e Bottom Sheets.
- [x] Integração de `IntersectionObserver` Y para injetar dicas contextuais baseadas na aba ativa da tela dentro do painel `?`.

### Fase 2: Comandos de Voz Estendidos e Navegação (v1.1 - Planejada)
- [ ] **Navegação por Voz:** Permitir que comandos como *"ir para visitas"*, *"ir para metas"*, *"subir"* ou *"descer"* realizem o scroll automático da tela para a linha/módulo correspondente.
- [ ] **Audiodescrição de Ajuda:** Quando o painel `?` estiver aberto, o clique no botão de voz central lerá em áudio o texto da dica contextual ativa.
- [ ] **Feedback Tátil Diferenciado:** Implementação de padrões de vibração via `navigator.vibrate` (ex: vibração única curta para ativação, vibração dupla de sucesso, vibração longa de erro ou comando não reconhecido).

### Fase 3: Integração ao Webapp Principal (v2.0 - Planejada)
- [ ] Integração da barra de acessibilidade à página de login e de visitas principal.
- [ ] Transição estável do `localStorage` para base de cache local sincronizada.

---

## 4. Diretrizes de Design Visual e Acessibilidade

- **Área de Toque Mínima:** Todos os botões da base possuem diâmetro mínimo de 58px (laterais) a 74px (central) para evitar toques acidentais ou errados.
- **Feedback Visual Claro:** O botão de voz utiliza animação pulsação em vermelho (`.listening`) durante a gravação e verde escuro (`.speaking`) durante a leitura de textos.
- **Espelhamento Físico:** O modo canhoto é implementado por classe global no `body` (`body.hand-left`), o que aciona `flex-direction: row-reverse` de forma limpa via CSS, garantindo adaptabilidade com excelente performance de renderização.
