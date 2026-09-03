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

/**
 * Inicialização de compatibilidade de Sandbox para testes existentes.
 * Renderiza a barra superior de versão e o Card Principal de instruções
 * usando as classes padrão do testes.css (topo-acoes-teste e card-principal).
 */
function inicializarSandbox(config) {
  if (!config) return;

  const versao = config.versao || 'teste v1.0';
  const titulo = config.titulo || 'Instruções do Teste';
  const instrucoes = config.instrucoes || [];

  // 1. Barra de Ações do Topo (se ainda não existir)
  let topoAcoes = document.querySelector('.topo-acoes-teste');
  if (!topoAcoes) {
    topoAcoes = document.createElement('div');
    topoAcoes.className = 'topo-acoes-teste';

    const pathname = window.location.pathname;
    const filenameWithExt = pathname.substring(pathname.lastIndexOf('/') + 1) || "teste.html";

    topoAcoes.innerHTML = `
      <div class="teste-nome-arquivo" id="topoNomeArquivo">${filenameWithExt}</div>
      <div class="teste-versao-topo">${versao}</div>
    `;
    document.body.insertBefore(topoAcoes, document.body.firstChild);
  }

  // 2. Card Principal de Instruções (se ainda não existir)
  let cardPrincipal = document.getElementById('cardPrincipal');
  if (!cardPrincipal) {
    cardPrincipal = document.createElement('div');
    cardPrincipal.className = 'card-principal';
    cardPrincipal.id = 'cardPrincipal';

    const itensInstrucoes = instrucoes.map((ins) => `<li>${ins}</li>`).join('');

    cardPrincipal.innerHTML = `
      <div class="cabecalho-principal" onclick="toggleCardPrincipal()">
        <span class="titulo-principal">📊 ${titulo}</span>
        <span class="seta-principal" id="setaPrincipal">+</span>
      </div>
      <div class="conteudo-principal-wrapper">
        <div class="conteudo-principal">
          <div class="corpo-principal">
            <div class="sub-card ativo" id="subCardInstrucoes">
              <div class="sub-card-header" onclick="toggleSubCard('subCardInstrucoes')">
                <span>📋 Instruções e Critérios</span>
                <span class="sub-card-seta">−</span>
              </div>
              <div class="sub-card-content-wrapper">
                <div class="sub-card-content">
                  <ol style="padding-left: 1.2rem; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.4rem;">
                    ${itensInstrucoes}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertBefore(cardPrincipal, topoAcoes.nextSibling);
  }

  // Se houver barra inferior, adiciona a classe no body
  if (document.querySelector('.barra-inferior')) {
    document.body.classList.add('has-barra-inferior');
  }
}


