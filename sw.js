const CACHE_NAME = 'CatMap';

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Vi låter webbläsaren hantera alla nätverksanrop normalt
    // eftersom kartan kräver internet för bilder och rutt-data.
    e.respondWith(fetch(e.request));
});
