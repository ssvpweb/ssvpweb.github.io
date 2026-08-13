# Plano de Implementação - Barra Inferior Alinhada e Sem Elevação (v2.1)

Este documento especifica a reestruturação visual da barra inferior de acessibilidade e o mecanismo definitivo para fechamento de painéis ao clicar fora no Webapp da SSVP.

---

## 1. Escopo e Objetivos

O objetivo deste protótipo (v2.1) é refinar a usabilidade e a consistência visual da barra inferior no dispositivo **Moto E7**:
1. Corrigir o problema de cliques que não fechavam as Bottom Sheets.
2. Alinhar todos os botões no plano horizontal dentro da barra (sem elevação negativa).
3. Redimensionar o botão central de microfone para ser 30% maior que os botões laterais, mantendo o alinhamento da base.
4. Aplicar fundos de cores sólidas e planas (flat design) em todos os botões para melhor contraste e simplicidade cognitiva.

---

## 2. Redesenho da Barra Inferior

### Dimensões e Alinhamentos:
- **Barra Inferior (`.bottom-navigation-bar`):** Altura estendida para `90px` para conter confortavelmente o botão central.
- **Botões Laterais (`+` e `?`):** Diâmetro de `54px`, centralizados verticalmente na barra.
- **Botão Central (Microfone):** Diâmetro de `70px` (30% maior), alinhado verticalmente com a mesma distância inferior que os botões laterais (padding igual).

### Estilo de Cores Planas:
- **Fundo dos botões:** Removidos todos os degradês (`linear-gradient`).
- **Botões Laterais:** Fundo `#ffffff` sólido (tema claro) ou `#334155` sólido (tema escuro).
- **Botão Central:** Fundo `#007fff` (Azul Royal) sólido. Quando gravando, muda para vermelho sólido `#d32f2f`. Quando lendo texto, muda para verde sólido `#2e7d32`.

---

## 3. Mecanismo de Fechamento Robusto

Adiciona-se uma escuta de clique e toque global no elemento `document` para fechar os painéis:
```javascript
document.addEventListener('click', (event) => {
  const settingsSheet = document.getElementById('settingsSheet');
  const helpSheet = document.getElementById('helpSheet');
  const bottomBar = document.getElementById('bottomBar');
  
  if (settingsSheet.classList.contains('open-sheet') || helpSheet.classList.contains('open-sheet')) {
    if (!settingsSheet.contains(event.target) && 
        !helpSheet.contains(event.target) && 
        !bottomBar.contains(event.target)) {
      closeAllSheets();
    }
  }
});
```

---

## 4. Arquivos Alvos

- **Protótipo HTML:** [ux_v2.1_barra_acessibilidade.html](file:///c:/webappssvp/webappssvp.github.io/testes/ux/barra_inferior/ux_v2.1_barra_acessibilidade.html)
- **Registro do Chat:** [260813_testes_ux_barra_v2.1.md](file:///c:/webappssvp/webappssvp.github.io/dev_local/chats/260813_testes_ux_barra_v2.1.md)
