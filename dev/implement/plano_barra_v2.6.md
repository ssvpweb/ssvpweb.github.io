# Plano de Implementação - Bordas Diferenciadas nos Inputs (v2.6)

Este documento especifica a alteração do estilo das bordas dos inputs nos cards de dados no Webapp da SSVP.

---

## 1. Escopo e Objetivos

O objetivo deste protótipo (v2.6) é otimizar a clareza sobre áreas interativas e o status de foco ativo no celular **Moto E7**:
1. Implementar um formato de borda discreta (tracejada em azul/cinza) para que o idoso identifique instantaneamente que o campo é interativo.
2. Implementar um formato de borda sólida e em vermelho intenso de alta visibilidade para quando o campo estiver ativamente selecionado.

---

## 2. Especificação do CSS

- **Borda Discreta (Padrão):**
  ```css
  .card-input-2d {
    width: 100%;
    background: var(--ssvp-gray-light);
    border: 2px dashed #94a3b8; /* Tracejado discreto de preenchimento */
    border-radius: 8px;
    color: var(--ssvp-text-main);
    padding: 0.6rem 0.7rem;
    font-family: inherit;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    cursor: pointer;
  }
  ```
- **Borda Selecionada (Intensa):**
  ```css
  .card-input-2d.selected-input {
    border: 3px solid var(--ssvp-red); /* Sólido, espesso e em destaque vermelho */
    box-shadow: 0 0 0 4px rgba(211, 47, 47, 0.25); /* Sombra intensa de foco */
    background-color: var(--ssvp-white);
  }
  ```

---

## 3. Arquivos Alvos

- **Protótipo HTML:** [ux_v2.6_barra_acessibilidade.html](file:///c:/webappssvp/webappssvp.github.io/testes/ux/barra_inferior/ux_v2.6_barra_acessibilidade.html)
- **Registro do Chat:** [260813_testes_ux_barra_v2.6.md](file:///c:/webappssvp/webappssvp.github.io/dev_local/chats/260813_testes_ux_barra_v2.6.md)
