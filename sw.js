importScripts('/vue-wwwid/workbox-sw.prod.v2.1.2.js');

const workbox = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});


workbox.router.registerRoute(
  new RegExp('^https:\/\/api\.rss2json\.com.*'),
  workbox.strategies.staleWhileRevalidate()
);

workbox.router.registerRoute(
  new RegExp('^https:\/\/api\.rss2json\.com.*'),
  workbox.strategies.cacheFirst({
    cacheName: 'rss2json',
    cacheableResponse: {
      statuses: [0, 200], // Make sure 0 is included in this list.
    }
  })
);

workbox.precache([
  {
    "url": "/vue-wwwid/about.69c38083873e56e1b56c.js",
    "revision": "31b6219897f284af5e98a13eefc5df1f"
  },
  {
    "url": "/vue-wwwid/assets/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "/vue-wwwid/assets/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "/vue-wwwid/assets/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "/vue-wwwid/assets/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "/vue-wwwid/assets/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "/vue-wwwid/assets/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "/vue-wwwid/assets/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "/vue-wwwid/assets/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "/vue-wwwid/assets/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "/vue-wwwid/assets/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "/vue-wwwid/assets/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "/vue-wwwid/assets/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "/vue-wwwid/dep-graph.json",
    "revision": "833359b2d176619eabe596387f47741d"
  },
  {
    "url": "/vue-wwwid/detail.49e7758453a65d3f555f.js",
    "revision": "a7a9ee563ca6e7a987a747ef7422b935"
  },
  {
    "url": "/vue-wwwid/home.f0b3b8f51d0960bdd09a.js",
    "revision": "d06d22547be3d789bed0ea483d173cec"
  },
  {
    "url": "/vue-wwwid/index.html",
    "revision": "f325879a9c6bf5ff9f5a90bfdbe90236"
  },
  {
    "url": "/vue-wwwid/main.806882dc684c8dff6ab8.js",
    "revision": "525db012718c3b4b15f05780cf748782"
  },
  {
    "url": "/vue-wwwid/main.86faed425c0ca35569732d113c279c87.css",
    "revision": "99ba07517dc543ab6794ebc27c11376d"
  },
  {
    "url": "/vue-wwwid/manifest.json",
    "revision": "e7a6b84f79cc1b2a7d6a299f2c73b3c0"
  },
  {
    "url": "/vue-wwwid/runtime.e0aa0f8ef1348439b539.js",
    "revision": "5e368bb09c3b567fe8d05012be6ce9cc"
  },
  {
    "url": "/vue-wwwid/vendor.dbf921ae84b6d8ad0386.js",
    "revision": "c49bbd888b3cd6eb81b0823ace359731"
  },
  {
    "url": "/vue-wwwid/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
