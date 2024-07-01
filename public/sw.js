// sw.js
const CACHE_NAME = 'v1';
const urlsToCache = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'icon.png' // Asegúrate de tener un icono en tu directorio si lo referencias
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
