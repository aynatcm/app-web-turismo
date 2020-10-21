self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./hoteles.html", "./Aventuras.html", "./lugares.html", "./Restaurantes.html", "./Boaco.html", "./Carazo.html", "Chinandega.html", "./Chontales.html", "./Esteli.html", "./Granada.html", "./Jinotega.html", "./Leon.html", "./Madriz.html", "./managua.html", "./Masaya.html", "./Matagalpa.html", "./NuevaSegovia.html", "./Raan.html", "./Raas.html", "./RioSanJuan.html", "./Rivas.html", "./css/activades.css",
                "./css/home.css", "./css/hoteles.css", "./css/lugares.css", "./css/restaurantes.css", "./css/Departamento.css", "./images/icons/icon-192x192.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});