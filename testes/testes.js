/**
 * SSVP Test Helpers (testes.js)
 * Script comum compartilhado pelas páginas de teste do laboratório SSVP.
 * Fornece lógica para o cabeçalho de informações colapsável.
 */

// Lógica para Expandir/Recolher o Card Principal de Instruções
function toggleCardPrincipal() {
  const card = document.getElementById('cardPrincipal');
  const seta = document.getElementById('setaPrincipal');
  
  if (!card || !seta) return;
  
  const isAtivo = card.classList.toggle('ativo');
  seta.innerText = isAtivo ? '−' : '+';
  seta.style.transform = isAtivo ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Lógica para Expandir/Recolher os Sub-Cards (Acordeão)
function toggleSubCard(id) {
  const cardSelecionado = document.getElementById(id);
  if (!cardSelecionado) return;
  
  const seta = cardSelecionado.querySelector('.sub-card-seta');
  
  // Fecha outros sub-cards para manter o comportamento de acordeão limpo
  const todosSubCards = document.querySelectorAll('.sub-card');
  todosSubCards.forEach(card => {
    if (card.id !== id && card.classList.contains('ativo')) {
      card.classList.remove('ativo');
      const setaOutro = card.querySelector('.sub-card-seta');
      if (setaOutro) {
        setaOutro.innerText = '+';
        setaOutro.style.transform = 'rotate(0deg)';
      }
    }
  });

  // Alterna o estado do card selecionado
  const isAtivo = cardSelecionado.classList.toggle('ativo');
  if (seta) {
    seta.innerText = isAtivo ? '−' : '+';
    seta.style.transform = isAtivo ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

// Inicialização automática ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const pathname = window.location.pathname;
  const filenameWithExt = pathname.substring(pathname.lastIndexOf('/') + 1) || "teste_padrao.html";
  
  const elNome = document.getElementById("topoNomeArquivo");
  if (elNome) {
    elNome.textContent = filenameWithExt;
  }
});

