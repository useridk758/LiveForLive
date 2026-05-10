const CACHE_NAME = 'liveforlive-cache-v2';
const DYNAMIC_CACHE = 'liveforlive-dynamic-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data/stream-data.js',
  './scripts/site-utils.js',
  './manifest.webmanifest'
];
const FALLBACK_URL = './index.html';

function cleanOldCaches() {
  return caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.filter((name) => name !== CACHE_NAME && name !== DYNAMIC_CACHE).map((name) => caches.delete(name))
    );
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    cleanOldCaches().then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
          return response;
        })
        .catch(() => caches.match(FALLBACK_URL));
    })
  );
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-latest-streams') {
    event.waitUntil(
      self.clients.matchAll().then((clients) => {
        if (!clients || !clients.length) {
          return Promise.resolve();
        }
        return Promise.all(clients.map((client) => client.postMessage({ type: 'SYNC_COMPLETE' })));
      })
    );
  }
});

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: 'LiveForLive update', body: 'New streams and schedule changes are available.' };
  const options = {
    body: data.body,
    icon: './assets/icon-192.png',
    badge: './assets/icon-192.png',
    data: { url: './index.html' }
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clientsArr) => {
      const client = clientsArr.find((c) => c.visibilityState === 'visible');
      if (client) {
        return client.focus();
      }
      return self.clients.openWindow('./index.html');
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(caches.delete(CACHE_NAME));
  }
});
