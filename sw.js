// MyPlopPlop Service Worker v2
// Cache-first for static assets, network-first for HTML pages

const CACHE_NAME = 'myplopplop-v2';

const PRE_CACHE_URLS = [
  '/',
  '/shop.html',
  '/cart.html',
  '/checkout.html',
  '/tracking.html',
  '/orders.html',
  '/wallet.html',
  '/login.html',
  '/help.html',
  '/driver.html',
  '/diaspora.html'
];

const OFFLINE_PAGE = '/';

// Install: pre-cache main pages
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRE_CACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch: route requests by type
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Skip cross-origin requests (CDNs, APIs, etc.)
  if (url.origin !== self.location.origin) return;

  // Determine strategy based on request type
  if (isStaticAsset(url.pathname)) {
    // Cache-first for static assets (CSS, JS, images, fonts)
    event.respondWith(cacheFirst(request));
  } else {
    // Network-first for HTML pages and everything else
    event.respondWith(networkFirst(request));
  }
});

// Check if the request is for a static asset
function isStaticAsset(pathname) {
  return /\.(css|js|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot|otf)(\?.*)?$/i.test(pathname);
}

// Cache-first strategy: serve from cache, fall back to network
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Static asset unavailable offline — return empty response
    return new Response('', { status: 408, statusText: 'Offline' });
  }
}

// Network-first strategy: try network, fall back to cache, then offline page
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    // Network failed — try cache
    const cached = await caches.match(request);
    if (cached) return cached;

    // No cache — serve offline fallback for navigation requests
    if (request.mode === 'navigate') {
      const offlinePage = await caches.match(OFFLINE_PAGE);
      if (offlinePage) return offlinePage;
    }

    return new Response('Ou pa konekte. Tanpri tcheke entènèt ou.', {
      status: 503,
      statusText: 'Offline',
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}
