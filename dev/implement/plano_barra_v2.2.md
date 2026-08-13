# Plano de Implementação - Entrada por Voz e Teclado Centralizados (v2.2)

Este documento especifica a especificação técnica e de comportamento para unificar todas as interações de Speech-to-Text (voz para texto) e digitação manual no botão de áudio central da barra inferior no Webapp da SSVP.

---

## 1. Escopo e Objetivos

O objetivo deste protótipo (v2.2) é otimizar e limpar a interface de entrada de dados no dispositivo **Moto E7**:
1. Eliminar os botões de controle individuais (`🎙️`/`⌨️`) de cada input nos cards de dados, reduzindo ruído visual e simplificando o layout móvel.
2. Centralizar todas as ações de gravação e teclado no botão de áudio central da barra inferior.
3. Rastrear o input ativo/selecionado pelo usuário no DOM e aplicar as ações correspondentes a ele.

---

## 2. Lógica de Interação Híbrida Unificada

### Seleção de Input:
- O usuário toca em qualquer input de texto nos cards.
- O input ganha destaque visual (ex: borda vermelha e classe `.focused-input`), indicando que está selecionado (`activeInputEl`).
- Nenhum teclado ou gravador é aberto automaticamente neste momento (o input permanece `readonly` por padrão).

### Comportamento do Botão Central de Voz (`#btnVoice`):

1. **Toque Rápido (Click):**
   - **Caso 1: Input Selecionado:** Ativa a gravação de voz (STT). A fala transcrita é injetada no valor do `activeInputEl`.
   - **Caso 2: Nenhum Input Selecionado:** Ativa a gravação de voz para comandos do sistema (ex: *"ir para metas"*, *"abrir Google Maps"*).

2. **Toque Longo (Pressionar por 500ms):**
   - **Caso 1: Input Selecionado:** Remove a propriedade `readonly` do `activeInputEl`, foca o cursor nele e abre o teclado virtual nativo do celular para digitação manual física.
   - **Caso 2: Nenhum Input Selecionado:** Sem ação (ou aciona o Bottom Sheet de ajuda).

---

## 3. Estrutura do Novo Arquivo

- **Arquivo Target:** [ux_v2.2_barra_acessibilidade.html](file:///c:/webappssvp/webappssvp.github.io/testes/ux/barra_inferior/ux_v2.2_barra_acessibilidade.html)
- **Localização:** `testes/ux/barra_inferior/`
- **Registro do Chat:** [260813_testes_ux_barra_v2.2.md](file:///c:/webappssvp/webappssvp.github.io/dev_local/chats/260813_testes_ux_barra_v2.2.md)
