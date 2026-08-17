# Planejamento - Simulador de Visita (Voz e Referências)

Este documento registra os requisitos, fluxos de funcionamento e decisões de design para o desenvolvimento do **Teste 2 do Simulador de Visita**, focado em **Busca por Voz e Pontos de Referência** no OpenStreetMap (OSM) e comunicação privada via WhatsApp.

---

## 🔒 Diretrizes de Privacidade e LGPD
* **Mensagens Privadas (Autoenvio)**: O envio de mensagens de WhatsApp para o motorista ou equipe de teste será feito usando a URL de texto livre do WhatsApp **sem passar o número de telefone**:
  `https://api.whatsapp.com/send?text=MENSAGEM`
  Isso abre o seletor de contatos do próprio WhatsApp móvel, onde a conversa consigo mesmo (*"Você"*) fica fixada no topo da lista. O usuário apenas toca em si mesmo e envia, mantendo a simulação 100% privada e sem expor dados pessoais no webapp.

---

## 📱 Ergonomia Visual e de Interface (Acessibilidade 60+)
* **Microfone na Barra Inferior**: Seguindo o padrão de usabilidade ergonômica móvel, o botão de acionamento do microfone de voz ficará fixado **no meio da barra inferior** (fixed bottom bar). Isso permite o alcance direto do dedão do idoso sem exigir o reposicionamento da mão.
* **Respeito à Safe Area (iOS)**: O rodapé fixo usará a variável CSS `env(safe-area-inset-bottom)` para não ser sobreposto pela barra virtual de navegação do iPhone.
* **Prevenção de Zoom**: Inputs com fonte mínima de 16px (`1rem`).
* **Padrão de Cores Acessível**: Botões de ação em cores semânticas sólidas e sem ícones (Salvar/Confirmar = Verde; Voltar/Cancelar = Amarelo Ouro com texto marinho; Limpar = Vermelho).
* **Seletor de Modo de Transporte**: Em vez de select boxes pequenas de difícil precisão móvel, exibiremos dois botões grandes de alternância estilo tabs (`[ 🚗 Carro ]` e `[ 🚶 A Pé ]`) para escolha rápida e direta.

---

## 🛠️ Funcionamento do Reconhecimento de Voz & Roteamento por Pontos de Referência

```mermaid
graph TD
    A[Toque no Microfone da Barra Inferior] --> B[Captura de Áudio via Web Speech API]
    B --> C[Texto de Busca: ex 'Drogasil', 'Carrefour' ou Ponto de Referência da Família]
    C --> D[Pesquisa Geolocalizada no OSM Nominatim com GPS Atual]
    D --> E[Exibe Lista de Opções Próximas Encontradas]
    E --> F[Seleção do Local e Atualização da Rota (Companheiro ou Família)]
```

### 1. Captura de Voz
* Ao clicar no botão de microfone (disponível tanto na seleção de paradas dos companheiros quanto na seleção do destino da família), o simulador inicia a captura de áudio utilizando a API `webkitSpeechRecognition`.
* O idoso fala o ponto de referência (POI) comercial ou público de encontro (ex: *"Drogasil"*, *"Supermercado Carrefour"*, ou *"Padaria Bella"*). O simulador utiliza estabelecimentos públicos em vez de nomes de pessoas físicas (como "Família Santos") para permitir que a API do OpenStreetMap (Nominatim) localize as coordenadas geográficas reais de forma bem-sucedida.

### 2. Busca Geolocalizada (OSM Nominatim)
* O simulador captura a posição GPS atual do smartphone (latitude/longitude).
* Dispara uma requisição para a API de geocodificação do OpenStreetMap (Nominatim) restringindo a busca a uma caixa delimitadora (bounding box) ou raio de proximidade de 5km a 10km ao redor do motorista.
* *URL de Busca Exemplo:*
  `https://nominatim.openstreetmap.org/search?q=drogasil&format=json&limit=5&viewbox=LongeMin,LatMin,LongeMax,LatMax&bounded=1`

### 3. Confirmação do Local
* O simulador exibe os 3 resultados mais próximos em cards grandes.
* O idoso toca no card correto para confirmar o local da parada (ex: *"Drogasil da Av. Lins de Vasconcelos"*).
* A coordenada geográfica é salva e inserida como waypoint na rota do Google Maps.

---

## 📝 Detalhes de Fluxo e Regras de Negócio

1. **Ativação Física**: O microfone de voz só iniciará a captura após a interação de clique físico ativa do usuário na tela, respeitando as regras de mídia do Safari (iOS).
2. **Fallback Textual**: Sempre haverá a opção de digitar o nome do local manualmente se o reconhecimento de voz falhar ou se o usuário preferir.
3. **Parâmetro de Modo de Transporte (Google Maps)**: A URL de deep link do Maps lerá a seleção de transporte e anexará o respectivo parâmetro `travelmode`:
   * Carro: `&travelmode=driving`
   * A Pé: `&travelmode=walking`
