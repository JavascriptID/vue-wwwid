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
    "url": "/vue-wwwid/about.f9a3f109a1b01ff61c34.js",
    "revision": "c4524d1e92f751921d1ae8f5f995d5d3"
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
    "revision": "9295aa238caaca2819ffc10ca14e3512"
  },
  {
    "url": "/vue-wwwid/detail.ac5a00f6d65802c7857b.js",
    "revision": "9e5cc92581b13a73d045952e5ca0b05c"
  },
  {
    "url": "/vue-wwwid/home.5801864d86549ca1a948.js",
    "revision": "eb16082de4a4835171b0c06de9b9c435"
  },
  {
    "url": "/vue-wwwid/index.html",
    "revision": "53713b20cc392c60a505ddaa66f1abbd"
  },
  {
    "url": "/vue-wwwid/main.86faed425c0ca35569732d113c279c87.css",
    "revision": "99ba07517dc543ab6794ebc27c11376d"
  },
  {
    "url": "/vue-wwwid/main.9d2332233348d036def3.js",
    "revision": "5d1ce4bfc879c4ae43db4e300408f2ae"
  },
  {
    "url": "/vue-wwwid/manifest.json",
    "revision": "e7a6b84f79cc1b2a7d6a299f2c73b3c0"
  },
  {
    "url": "/vue-wwwid/runtime.20cd66a67e7736b58acc.js",
    "revision": "11c02915953342954d09d655a9b25b9c"
  },
  {
    "url": "/vue-wwwid/vendor.0c6087673048c7e77ba0.js",
    "revision": "1e1d38f3c0ac8c5e8d46b9299ffb3bf1"
  },
  {
    "url": "/vue-wwwid/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
