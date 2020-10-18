importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// This will trigger the importScripts() for workbox.strategies and its dependencies:
workbox.loadModule('workbox-strategies');
workbox.loadModule('workbox-routing');
workbox.loadModule('workbox-expiration');
workbox.loadModule('workbox-precaching');


if (workbox) {
  workbox.routing.registerRoute(
    new RegExp('\.css$'),
    new workbox.strategies.CacheFirst({
      cacheName: 'My-awesome-cache-Stylesheets',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('\.js$'),
    new workbox.strategies.CacheFirst({
      cacheName: 'My-awesome-cache-js',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('\.html$'),
    new workbox.strategies.CacheFirst({
      cacheName: 'My-awesome-cache-html',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    new workbox.strategies.CacheFirst({
      cacheName: 'My-awesome-cache-Images',
    })
  );

  workbox.routing.registerRoute(
    new RegExp('https://my.api.mockaroo.com/v3/schedules?key=92e95890'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'My-awesome-cache-schedules',
      cacheExpiration: {
        maxAgeSeconds: 60 * 30 //cache the news content for 30mn
      }
    })
  );

  workbox.precaching.precacheAndRoute([
    'index.html',
      '/scripts/app.js',
      '/scripts/idb.js',
      '/styles/inline.css',
      '/images/ic_add_white_24px.svg',
      '/images/ic_refresh_white_24px.svg',
  ]);

}