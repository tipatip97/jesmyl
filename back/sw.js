
const OFFLINE_VERSION = 1;
const CACHE_NAME = 'offline';
const OFFLINE_URL = 'offline.html';

const filesToCache = [
  '/',
  '/S/jesmyl/r.js',
  '/S/jesmyl/rd.js',
  '/S/jesmyl/avenir-next.ttf',
  '/S/jesmyl/logo.png',
  '/S/jesmyl/style.css',
  '/S/jesmyl/script.js',
];

self.addEventListener('install', async event => {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(filesToCache);
});

self.addEventListener('activate', async event => {
  /*event.waitUntil((async () => {
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  self.clients.claim();*/
});

self.addEventListener('fetch', event => {
  event.respondWith(cacheFirst(event.request));
});


async function cacheFirst(request) {
  return await caches.match(request) || await fetch(request);
}






