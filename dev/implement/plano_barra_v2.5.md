# Plano de Implementação - Título de Módulo Ampliado em 40% (v2.5)

Este documento especifica a alteração do tamanho de fonte do título principal do módulo ativo no cabeçalho fixo das telas de acessibilidade móvel para o Webapp da SSVP.

---

## 1. Escopo e Objetivos

O objetivo deste protótipo (v2.5) é otimizar a experiência visual e a legibilidade para vicentinos idosos no celular **Moto E7**:
1. Aumentar o tamanho do título do módulo ativo ("Pessoas", "Visitas", "Metas") em 40% no cabeçalho.
2. Manter a harmonia visual compacta do topo, reduzindo margens internas desnecessárias.

---

## 2. Especificação Tipográfica e de CSS

### CSS Modificado:
- **`.active-module-main`:** `font-size: 2rem; font-weight: 700; color: white; letter-spacing: 0.5px;` (aumento de 40% em relação aos `1.45rem` anteriores).
- **`.header-fixed`:** Paddings otimizados para `0.5rem 1rem 0.6rem 1rem` para equilibrar a altura com a nova fonte de `2rem`.

---

## 3. Arquivos Alvos

- **Protótipo HTML:** [ux_v2.5_barra_acessibilidade.html](file:///c:/webappssvp/webappssvp.github.io/testes/ux/barra_inferior/ux_v2.5_barra_acessibilidade.html)
- **Registro do Chat:** [260813_testes_ux_barra_v2.5.md](file:///c:/webappssvp/webappssvp.github.io/dev_local/chats/260813_testes_ux_barra_v2.5.md)
