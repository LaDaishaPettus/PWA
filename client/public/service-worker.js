const version = "0.6.18";
const cacheName = `Decor&More-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                `/`,
                `/index.html`,
                `/src/styles.css`,
                `/HomeImages/slideshow.jpg`,
                `/HomeImages/slideshow1.png`,
                `/HomeImages/slideshow2.jpg`
            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {

    console.log(event.request.url);

    event.respondWith(

        caches.match(event.request).then(function (response) {

            return response || fetch(event.request);

        })

    );

});


