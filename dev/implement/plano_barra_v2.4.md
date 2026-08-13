# Plano de Implementação - Hierarquia de Cabeçalho Otimizada (v2.4)

Este documento especifica a inversão da hierarquia visual tipográfica no cabeçalho fixo das telas de acessibilidade móvel para o Webapp da SSVP.

---

## 1. Escopo e Objetivos

O objetivo deste protótipo (v2.4) é refinar a orientação cognitiva do usuário idoso:
1. Minimizar a importância visual do nome do aplicativo ("WEBAPP SSVP"), que é redundante para uso contínuo.
2. Maximizar a importância do módulo ativo na tela ("Pessoas", "Visitas", "Metas"), tornando-o a informação visual mais imediata do topo.

---

## 2. Especificação do Cabeçalho Fixo e CSS

### Mudança Estrutural (HTML):
```html
<header class="header-fixed">
  <div class="app-title-mini">WEBAPP SSVP</div>
  <h1 id="activeModuleTitle" class="active-module-main">Pessoas</h1>
</header>
```

### Especificações Tipográficas (CSS):
- **`.app-title-mini`:** `font-size: 0.8rem; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;` (tema claro e escuro adaptados para contraste sutil).
- **`.active-module-main`:** `font-size: 1.45rem; font-weight: 700; color: white; letter-spacing: 0.5px;` (título principal em destaque).
- **`.header-fixed`:** Reduzido padding vertical para `0.6rem 1rem 0.8rem 1rem` para manter a área de leitura dos cards preservada.

---

## 3. Arquivos Alvos

- **Protótipo HTML:** [ux_v2.4_barra_acessibilidade.html](file:///c:/webappssvp/webappssvp.github.io/testes/ux/barra_inferior/ux_v2.4_barra_acessibilidade.html)
- **Registro do Chat:** [260813_testes_ux_barra_v2.4.md](file:///c:/webappssvp/webappssvp.github.io/dev_local/chats/260813_testes_ux_barra_v2.4.md)
