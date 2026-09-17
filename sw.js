/* Service worker for this application. Cache name carries the version. */
var CACHE = "rmdh-3.12.0";
var PRECACHE = [
  "/",
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
  "/icons/apple-touch-icon-180.png",
  "/icons/icon.svg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(PRECACHE);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE) return caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith(
      caches.match("/").then(function (cached) {
        if (cached) return cached;
        return fetch(req).then(function (res) {
          if (res && res.status === 200) {
            var copy = res.clone();
            caches.open(CACHE).then(function (cache) { cache.put("/", copy); });
          }
          return res;
        }).catch(function () {
          return caches.match("/").then(function (anyCached) {
            if (anyCached) return anyCached;
            return new Response("<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'><title>Offline</title></head><body><p>You are offline. Rudrabha Mukherjee's Design Helper is ready when you reconnect.</p></body></html>", {
              status: 200,
              headers: { "Content-Type": "text/html; charset=utf-8" }
            });
          });
        });
      }).catch(function () {
        return caches.match("/").then(function (anyCached) {
          if (anyCached) return anyCached;
          return fetch(req);
        });
      })
    );
    return;
  }

  if (url.pathname.indexOf("/icons/") === 0 || url.pathname === "/manifest.webmanifest") {
    event.respondWith(
      caches.match(req).then(function (cached) {
        return cached || fetch(req).then(function (res) {
          var copy = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
          return res;
        });
      })
    );
  }
});

self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
