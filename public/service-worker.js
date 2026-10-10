// The old Create React App site registered a service worker at this path.
// Browsers that still have it check this file for updates; this version
// removes itself and reloads open tabs so they pick up the new site,
// which uses its own worker at /sw.js.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
