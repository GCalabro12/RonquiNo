// RonquiNo se mudó a /Sleep-Amable/: este service worker borra la copia antigua y se da de baja.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('ronquino-')).map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
));
