/**
 * SSVP Sandbox Utility (sandbox.js)
 * Motor de controle dinâmico de variáveis de UX e persistência local.
 */

// Estado global do sandbox
let sandboxConfig = null;
let sandboxValores = {};

/**
 * Inicializa o painel de testes Sandbox
 * @param {Object} config - Configurações do painel e controles de UX
 */
function inicializarSandbox(config) {
  sandboxConfig = config;
  const storageKey = `ssvp_sandbox_${config.id_teste}`;
  
  // 1. Carregar valores salvos ou inicializar com defaults
  try {
    const saved = localStorage.getItem(storageKey);
    sandboxValores = saved ? JSON.parse(saved) : {};
  } catch (e) {
    console.error("Erro ao ler localStorage:", e);
    sandboxValores = {};
  }

  // 2. Garantir que a versão externa e o Card de Cabeçalho existam no DOM
  const versao = config.versao || 'teste v1.0';
  const titulo = config.titulo || 'Teste de UX';

  let tagVersao = document.getElementById('testeTagVersao');
  if (!tagVersao) {
    tagVersao = document.createElement('div');
    tagVersao.id = 'testeTagVersao';
    tagVersao.className = 'teste-versao-topo';
    document.body.insertBefore(tagVersao, document.body.firstChild);
  }
  tagVersao.innerText = versao;

  let cardCabecalho = document.getElementById('cardCabecalho');
  if (!cardCabecalho) {
    cardCabecalho = document.createElement('header');
    cardCabecalho.id = 'cardCabecalho';
    cardCabecalho.className = 'card-cabecalho-teste';
    document.body.insertBefore(cardCabecalho, tagVersao.nextSibling);
  }

  // 3. Renderizar a estrutura interna do Cabeçalho Unificado
  let instrucoesHtml = '';
  if (config.instrucoes && config.instrucoes.length > 0) {
    instrucoesHtml = `
      <div class="teste-instrucoes">
        <h3>Instruções do Teste</h3>
        ${config.instrucoes.map((ins, idx) => `<p>${idx + 1}. ${ins}</p>`).join('')}
      </div>
    `;
  }

  cardCabecalho.innerHTML = `
    <div class="cabecalho-header" id="cabecalhoHeader">
      <div class="cabecalho-titulo-area">
        <h1 class="teste-funcionalidade">${titulo}</h1>
      </div>
      <span class="seta-toggle" id="setaToggle">+</span>
    </div>
    <div class="cabecalho-content-wrapper" id="cabecalhoWrapper">
      <div class="cabecalho-content">
        <div class="cabecalho-body">
          ${instrucoesHtml}
          
          <div class="teste-sandbox-controles" id="sandboxControles">
            <h3>Ajustes de UX</h3>
            <div class="controles-grid" id="controlesGrid"></div>
          </div>
          
          <div class="sandbox-acoes">
            <button class="btn-exportar-ux" id="btnExportarUX">📋 Copiar Ajustes para o Chat</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // 4. Lógica de toggle do cabeçalho
  const cabecalhoHeader = document.getElementById('cabecalhoHeader');
  const cabecalhoWrapper = document.getElementById('cabecalhoWrapper');
  const setaToggle = document.getElementById('setaToggle');

  cabecalhoHeader.addEventListener('click', () => {
    const isExpanded = cabecalhoWrapper.classList.toggle('expanded');
    cardCabecalho.classList.toggle('ativo', isExpanded);
    setaToggle.innerText = isExpanded ? '−' : '+';
  });

  // Adiciona a classe no body caso exista a necessidade de espaçamento inferior (barra fixa)
  if (document.querySelector('.barra-inferior')) {
    document.body.classList.add('has-barra-inferior');
  }

  // 5. Renderizar os controles e aplicar os valores iniciais
  const controlesGrid = document.getElementById('controlesGrid');
  
  if (config.controles && config.controles.length > 0) {
    config.controles.forEach(ctrl => {
      // Determina o valor atual (salvo no localStorage ou default)
      let valorAtual = sandboxValores[ctrl.variavel];
      if (valorAtual === undefined) {
        valorAtual = ctrl.padrao;
        sandboxValores[ctrl.variavel] = valorAtual;
      }

      // Aplica a variável CSS imediatamente ao :root
      aplicarVariavelCss(ctrl.variavel, valorAtual, ctrl.unit);

      // Cria o item do controle no DOM
      const item = document.createElement('div');
      item.className = 'controle-item';

      if (ctrl.tipo === 'range') {
        item.innerHTML = `
          <div class="controle-label-area">
            <span class="controle-label">${ctrl.label}</span>
            <span class="controle-valor" id="val-${ctrl.variavel}">${valorAtual}${ctrl.unit || ''}</span>
          </div>
          <input type="range" 
                 class="input-range-ux" 
                 id="input-${ctrl.variavel}" 
                 min="${ctrl.min}" 
                 max="${ctrl.max}" 
                 step="${ctrl.step || 1}" 
                 value="${valorAtual}">
        `;
      } else if (ctrl.tipo === 'color') {
        item.innerHTML = `
          <div class="controle-label-area">
            <span class="controle-label">${ctrl.label}</span>
            <span class="controle-valor" id="val-${ctrl.variavel}" style="font-family: monospace; font-size: 0.8rem;">${valorAtual}</span>
          </div>
          <input type="color" 
                 class="input-color-ux" 
                 id="input-${ctrl.variavel}" 
                 value="${valorAtual}">
        `;
      } else if (ctrl.tipo === 'select') {
        const opcoesHtml = ctrl.opcoes.map(op => `
          <option value="${op}" ${op === valorAtual ? 'selected' : ''}>${op}</option>
        `).join('');
        
        item.innerHTML = `
          <div class="controle-label-area">
            <span class="controle-label">${ctrl.label}</span>
          </div>
          <select class="input-select-ux" id="input-${ctrl.variavel}">
            ${opcoesHtml}
          </select>
        `;
      }

      controlesGrid.appendChild(item);

      // Escuta eventos para atualização em tempo real
      const inputEl = document.getElementById(`input-${ctrl.variavel}`);
      const eventName = ctrl.tipo === 'select' ? 'change' : 'input';

      inputEl.addEventListener(eventName, (e) => {
        const novoValor = e.target.value;
        
        // Atualiza valor local e CSS
        sandboxValores[ctrl.variavel] = novoValor;
        aplicarVariavelCss(ctrl.variavel, novoValor, ctrl.unit);
        
        // Atualiza a label descritiva do valor
        const valorDisplay = document.getElementById(`val-${ctrl.variavel}`);
        if (valorDisplay) {
          valorDisplay.innerText = `${novoValor}${ctrl.unit || ''}`;
        }

        // Salva no localStorage
        localStorage.setItem(storageKey, JSON.stringify(sandboxValores));
      });
    });
  } else {
    // Se não houver controles, remove a seção
    document.getElementById('sandboxControles').style.display = 'none';
  }

  // 6. Configurar botão de exportação (Cópia para clipboard)
  const btnExportar = document.getElementById('btnExportarUX');
  btnExportar.addEventListener('click', () => {
    const exportData = {
      nome_teste: config.id_teste,
      data_ajuste: new Date().toISOString().split('T')[0],
      valores_ajustados: sandboxValores
    };

    const textToCopy = JSON.stringify(exportData, null, 2);

    navigator.clipboard.writeText(textToCopy).then(() => {
      const originalText = btnExportar.innerText;
      btnExportar.innerText = "✓ Configuração Copiada!";
      btnExportar.style.backgroundColor = "var(--ssvp-success)";
      
      setTimeout(() => {
        btnExportar.innerText = originalText;
        btnExportar.style.backgroundColor = "";
      }, 2000);
    }).catch(err => {
      console.error("Erro ao copiar para clipboard:", err);
      alert("Erro ao copiar configuração. Copie manualmente do console do desenvolvedor.");
      console.log("Configurações de UX:", textToCopy);
    });
  });
}

/**
 * Auxiliar para aplicar variável CSS no root
 */
function aplicarVariavelCss(variavel, valor, unidade) {
  const formatado = valor + (unidade || '');
  document.documentElement.style.setProperty(variavel, formatado);
}
