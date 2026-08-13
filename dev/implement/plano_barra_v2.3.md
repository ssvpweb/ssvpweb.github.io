# Plano de Implementação - Botões de Acessibilidade Ampliados (v2.3)

Este documento especifica a ampliação dimensional e ergonômica dos botões da barra inferior de acessibilidade para o Webapp da SSVP.

---

## 1. Escopo e Objetivos

O objetivo deste protótipo (v2.3) é maximizar a usabilidade em dispositivos móveis como o **Moto E7**:
1. Aumentar a área física de toque dos botões na barra inferior em 20% para facilitar a interação de idosos.
2. Manter a proporção em que o botão central de microfone é 20% maior que os botões laterais.
3. Garantir que os botões caibam perfeitamente alinhados e centralizados dentro da barra inferior, expandindo sua altura correspondente.

---

## 2. Especificação Dimensional e de CSS

### Dimensões Ajustadas:
- **Barra Inferior (`.bottom-navigation-bar`):** Altura estendida para **`100px`** (antes `90px`).
- **Botões Laterais (`+` e `?`):** Diâmetro aumentado para **`65px`** (antes `54px`).
- **Botão Central (Microfone):** Diâmetro aumentado para **`78px`** (antes `70px`), mantendo o alinhamento da base vertical.
- **Área de Scroll do Grid (`.grid-vertical-container`):** Margem de base estendida para `padding-bottom: 150px` para evitar que a barra de 100px encubra os inputs dos cards inferiores.

---

## 3. Arquivos Alvos

- **Protótipo HTML:** [ux_v2.3_barra_acessibilidade.html](file:///c:/webappssvp/webappssvp.github.io/testes/ux/barra_inferior/ux_v2.3_barra_acessibilidade.html)
- **Registro do Chat:** [260813_testes_ux_barra_v2.3.md](file:///c:/webappssvp/webappssvp.github.io/dev_local/chats/260813_testes_ux_barra_v2.3.md)
