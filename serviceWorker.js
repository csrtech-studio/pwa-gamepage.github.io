const CACHE_NAME = 'tienda-de-videojuegos-v3';
const urlsToCache = [
    '/pwa-gamepage/',
    '/pwa-gamepage/index.html',
    '/pwa-gamepage/compras.html',
    '/pwa-gamepage/nosotros.html',
    '/pwa-gamepage/pago.html',
    '/pwa-gamepage/ventas.html',
    '/pwa-gamepage/offline.html',
    '/pwa-gamepage/css/style.css',
    '/pwa-gamepage/images/logo.png',
    '/pwa-gamepage/images/cart-count.png',
    '/pwa-gamepage/images/icons/image.jpg',
    '/pwa-gamepage/images/icons/favicon.ico',
    '/pwa-gamepage/js/app.js',
    '/pwa-gamepage/js/notificationsHandler.js',
    '/pwa-gamepage/js/videojuegos.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierto');
                return cache.addAll(urlsToCache);
            })
            .catch(err => console.error('Fallo al abrir el cache: ', err))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Cache antiguo eliminado:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

