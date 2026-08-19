# Análise de Utilização de Ícones do Material Design

Esta análise mapeia os ícones SVG do Material Design disponíveis na pasta [`img/`](file:///c:/github/ssvpweb.github.io/img/) para aplicação prática no Webapp da Sociedade de São Vicente de Paulo (SSVP), divididos por módulos e funções do sistema.

---

## 1. Barra Inferior de Acessibilidade & Ajustes Ergonômicos

Esses ícones melhoram a clareza e as funções da barra de navegação principal e dos seus Morphing Cards.

| Ícone | Arquivo Local | Aplicação Sugerida |
| :--- | :--- | :--- |
| ⚙️ | [`settings.svg`](file:///c:/github/ssvpweb.github.io/img/settings.svg) | Substituir o símbolo `+` no botão esquerdo da barra inferior para representar de forma universal o painel de **Configurações e Ergonomia**. |
| 🎙️ | [`mic.svg`](file:///c:/github/ssvpweb.github.io/img/mic.svg) | Usar no botão central da barra inferior para gravação e ditação de voz ativa. |
| 🔇 | [`mic_off.svg`](file:///c:/github/ssvpweb.github.io/img/mic_off.svg) | Sinalizar estado de microfone mutado ou indisponibilidade de reconhecimento de voz. |
| ❓ | [`question_mark.svg`](file:///c:/github/ssvpweb.github.io/img/question_mark.svg) | Usar no botão direito da barra inferior para representar a **Central de Ajuda**. |
| ℹ️ | [`info.svg`](file:///c:/github/ssvpweb.github.io/img/info.svg) | Utilizar no painel de Ajuda Contextual para sinalizar informações de sistema. |
| 🔎 | [`search.svg`](file:///c:/github/ssvpweb.github.io/img/search.svg) | Ícone de busca rápida para filtrar cards no topo da tela. |
| 🔠 | [`text_increase.svg`](file:///c:/github/ssvpweb.github.io/img/text_increase.svg) | Usar no seletor de "Tamanho do Texto" do Morphing Card para o botão de aumentar tamanho (A+ / A++). |
| 🔡 | [`text_decrease.svg`](file:///c:/github/ssvpweb.github.io/img/text_decrease.svg) | Usar no seletor de "Tamanho do Texto" para reverter ao tamanho normal (A). |

---

## 2. Módulo de Pessoas (Vicentinos & Assistidos)

Melhoria visual na identificação dos papéis de usuários e assistidos nos cards horizontais.

| Ícone | Arquivo Local | Aplicação Sugerida |
| :--- | :--- | :--- |
| 👤 | [`person.svg`](file:///c:/github/ssvpweb.github.io/img/person.svg) | Representar o cadastro ou perfil individual do **Vicentino** ou do **Assistido** no cabeçalho dos cards. |
| 👥 | [`groups.svg`](file:///c:/github/ssvpweb.github.io/img/groups.svg) / [`group.svg`](file:///c:/github/ssvpweb.github.io/img/group.svg) | Representar a **Família Assistida** (núcleo familiar) no Módulo Pessoas. |
| ⭐ | [`family_star.svg`](file:///c:/github/ssvpweb.github.io/img/family_star.svg) | Destacar famílias assistidas que são prioridade de atendimento ou em situação de extrema urgência. |
| 📇 | [`user_attributes.svg`](file:///c:/github/ssvpweb.github.io/img/user_attributes.svg) | Representar a seção de dados cadastrais/socioeconômicos detalhados. |
| 👁️ | [`visibility.svg`](file:///c:/github/ssvpweb.github.io/img/visibility.svg) / [`visibility_off.svg`](file:///c:/github/ssvpweb.github.io/img/visibility_off.svg) | Exibir/ocultar dados sensíveis nos cadastros (como documentos ou telefones) atendendo a requisitos de privacidade. |

---

## 3. Módulo de Visitas, Rotas & Gestão de Conectividade

Apoio para o roteamento no Google Maps e sinalização de sincronização de dados offline.

| Ícone | Arquivo Local | Aplicação Sugerida |
| :--- | :--- | :--- |
| 📍 | [`location_on.svg`](file:///c:/github/ssvpweb.github.io/img/location_on.svg) | Exibir ao lado do endereço nos cards para deixar claro que o endereço é clicável. |
| 🗺️ | [`directions.svg`](file:///c:/github/ssvpweb.github.io/img/directions.svg) | Inserir no botão de "abrir Google Maps" para tornar a ação de traçar rota visualmente mais óbvia para idosos. |
| 🔄 | [`sync.svg`](file:///c:/github/ssvpweb.github.io/img/sync.svg) | Sinalizar no cabeçalho do app quando a sincronização de dados está em andamento. |
| 📴 | [`sync_disabled.svg`](file:///c:/github/ssvpweb.github.io/img/sync_disabled.svg) / [`sync_problem.svg`](file:///c:/github/ssvpweb.github.io/img/sync_problem.svg) | Alertar se a sincronização falhou ou se há conflito nos relatos gravados localmente. |
| 🌐 | [`cloud_done.svg`](file:///c:/github/ssvpweb.github.io/img/cloud_done.svg) / [`cloud_off.svg`](file:///c:/github/ssvpweb.github.io/img/cloud_off.svg) | Mostrar no topo o estado da nuvem: "Dados Salvos na Nuvem" vs "Trabalhando Offline". |
| 📶 | [`wifi.svg`](file:///c:/github/ssvpweb.github.io/img/wifi.svg) / [`wifi_off.svg`](file:///c:/github/ssvpweb.github.io/img/wifi_off.svg) | Exibição de indicador de conexão ativo/inativo para o vicentino. |

---

## 4. Módulo de Metas (Saúde, Nutrição & Bem-Estar)

Ícones específicos para categorizar os tipos de metas acordadas com as famílias assistidas nos relatórios do SSVP.

| Ícone | Arquivo Local | Aplicação Sugerida |
| :--- | :--- | :--- |
| 🎯 | [`target.svg`](file:///c:/github/ssvpweb.github.io/img/target.svg) | Substituir o emoji atual `🎯` no cabeçalho e indicadores das Metas. |
| 🏥 | [`health_and_safety.svg`](file:///c:/github/ssvpweb.github.io/img/health_and_safety.svg) / [`health_cross.svg`](file:///c:/github/ssvpweb.github.io/img/health_cross.svg) | Representar metas relacionadas a consultas médicas, UBS, vacinação e exames preventivos. |
| 💊 | [`prescriptions.svg`](file:///c:/github/ssvpweb.github.io/img/prescriptions.svg) | Usar em metas de fornecimento, controle ou acompanhamento de medicamentos de uso contínuo (idosos/crônicos). |
| 🤰 | [`pregnancy.svg`](file:///c:/github/ssvpweb.github.io/img/pregnancy.svg) | Identificar metas ou acompanhamentos focados em gestantes (pré-natal, enxoval). |
| 🤒 | [`sick.svg`](file:///c:/github/ssvpweb.github.io/img/sick.svg) | Sinalizar alertas de saúde prioritária ou tratamentos ativos de membros debilitados da família. |
| 🍼 | [`water_bottle.svg`](file:///c:/github/ssvpweb.github.io/img/water_bottle.svg) | Representar metas de segurança alimentar, distribuição de água potável ou cestas básicas. |

---

## 5. Tutoriais & Gestos de Aprendizado para Idosos

Esses ícones ajudam a explicar de forma animada os gestos táteis da interface nas dicas contextuais de ajuda.

| Ícone | Arquivo Local | Aplicação Sugerida |
| :--- | :--- | :--- |
| 👆 | [`touch_app.svg`](file:///c:/github/ssvpweb.github.io/img/touch_app.svg) / [`touch_long.svg`](file:///c:/github/ssvpweb.github.io/img/touch_long.svg) | Ilustrar nos tutoriais o toque rápido vs o toque longo (ex: segurar microfone para abrir o teclado). |
| ⬅️ ➡️ | [`swipe_left.svg`](file:///c:/github/ssvpweb.github.io/img/swipe_left.svg) / [`swipe_right.svg`](file:///c:/github/ssvpweb.github.io/img/swipe_right.svg) | Ensinar idosos que os cards podem ser deslizados horizontalmente no carrossel de cada módulo. |
| ⬆️ ⬇️ | [`swipe_up.svg`](file:///c:/github/ssvpweb.github.io/img/swipe_up.svg) / [`swipe_down.svg`](file:///c:/github/ssvpweb.github.io/img/swipe_down.svg) | Ensinar o movimento de rolagem para alternar entre os módulos Pessoas, Visitas e Metas. |
| 🫳 | [`drag_click.svg`](file:///c:/github/ssvpweb.github.io/img/drag_click.svg) / [`pan_tool.svg`](file:///c:/github/ssvpweb.github.io/img/pan_tool.svg) | Mostrar guias de interação manual. |

---

## 6. Alertas e Feedback Visual

| Ícone | Arquivo Local | Aplicação Sugerida |
| :--- | :--- | :--- |
| ⚠️ | [`warning.svg`](file:///c:/github/ssvpweb.github.io/img/warning.svg) | Avisos gerais no console de acessibilidade ou alertas de campos incompletos. |
| 🚨 | [`dangerous.svg`](file:///c:/github/ssvpweb.github.io/img/dangerous.svg) / [`error.svg`](file:///c:/github/ssvpweb.github.io/img/error.svg) | Sinalização de erros críticos de comandos de voz inválidos ou perda total de conexão. |
| 🔔 | [`add_alert.svg`](file:///c:/github/ssvpweb.github.io/img/add_alert.svg) | Notificar novas metas vencendo ou agendamento de reuniões da conferência. |
