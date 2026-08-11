const CACHE_NAME = 'alarme-pwa-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

let alarmeTimeout = null;

// Instalação do Service Worker e cache dos recursos básicos
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estratégia de Cache First com Fallback para rede (funcionamento offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

// ----------------------------------------------------
// GERENCIADOR DE MENSAGENS E ALERTAS EM SEGUNDO PLANO
// ----------------------------------------------------
self.addEventListener('message', (event) => {
  const data = event.data;

  if (data.action === 'agendar_alarme') {
    // Cancela qualquer alarme anterior agendado
    if (alarmeTimeout) {
      clearTimeout(alarmeTimeout);
      alarmeTimeout = null;
    }

    const tempoMs = data.tempoMs;
    const totalSegundos = data.totalSegundos;

    // Agenda o temporizador no contexto isolado do Service Worker
    alarmeTimeout = setTimeout(() => {
      // Quando expirar, dispara a notificação de sistema (mesmo se o app estiver fechado)
      self.registration.showNotification("Alarme PWA SSVP", {
        body: "O temporizador do seu alarme de testes expirou!",
        icon: "icon.png",
        vibrate: [300, 100, 300, 100, 300], // Vibração ritmada
        tag: "alarme-ssvp-tag",
        renotify: true
      });

      // Envia uma mensagem para os clientes abertos tocando o som de bip local
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ action: 'alarme_disparado_sw' });
        });
      });

      alarmeTimeout = null;
    }, tempoMs);

    console.log(`[SW] Notificação agendada para ocorrer em ${tempoMs}ms.`);
  } else if (data.action === 'cancelar_alarme') {
    if (alarmeTimeout) {
      clearTimeout(alarmeTimeout);
      alarmeTimeout = null;
      console.log("[SW] Alarme em segundo plano cancelado.");
    }
  }
});
