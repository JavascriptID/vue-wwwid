importScripts('workbox-sw.prod.v2.1.2.js');

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
    cacheName: 'wwwid-api',
    cacheableResponse: {
      statuses: [0, 200], // Make sure 0 is included in this list.
    }
  })
);

workbox.router.registerRoute(
  new RegExp('^https:\/\/cdn-images.*'),
  workbox.strategies.cacheFirst({
    cacheName: 'wwwid-img',
    cacheableResponse: {
      statuses: [0, 200], // Make sure 0 is included in this list.
    }
  })
);

workbox.precache([
  {
    "url": "/vue-wwwid/about.64d47a019f27fdd382e3.js",
    "revision": "38ae68023a67a16f82ba5709bda31b63"
  },
  {
    "url": "/vue-wwwid/assets/icons/ajax-loader-small.gif",
    "revision": "946ccf928eb55b717f5485397873829b"
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
    "url": "/vue-wwwid/assets/icons/overlay.png",
    "revision": "77aeaa52715b898b73c74d68c630330e"
  },
  {
    "url": "/vue-wwwid/category.64d47a019f27fdd382e3.js",
    "revision": "f0c0fdfa48a6d82fd9a5f645ab421f92"
  },
  {
    "url": "/vue-wwwid/detail.64d47a019f27fdd382e3.js",
    "revision": "9d05ffa76aa5a9cbf8eb6438ed58003a"
  },
  {
    "url": "/vue-wwwid/hash.json",
    "revision": "423f0f83f94c078ad9a3ea3eff16db0a"
  },
  {
    "url": "/vue-wwwid/home.64d47a019f27fdd382e3.js",
    "revision": "14567b77f3ce0fddb51c938df994f735"
  },
  {
    "url": "/vue-wwwid/index.html",
    "revision": "1da92bb1d674c85ddf6da323664d5147"
  },
  {
    "url": "/vue-wwwid/main.5f7d7bcc5405ea449f32fd07bb8d87d6.css",
    "revision": "d6e5f3db904a87a12884e583b7a49dd9"
  },
  {
    "url": "/vue-wwwid/main.64d47a019f27fdd382e3.js",
    "revision": "d4c36ae903ae0775eb985279eab1b5fd"
  },
  {
    "url": "/vue-wwwid/manifest.json",
    "revision": "e7a6b84f79cc1b2a7d6a299f2c73b3c0"
  },
  {
    "url": "/vue-wwwid/runtime.64d47a019f27fdd382e3.js",
    "revision": "5e28133699c20ea818115fa82ce85605"
  },
  {
    "url": "/vue-wwwid/vendor.64d47a019f27fdd382e3.js",
    "revision": "20351349fe6ceb5bddca7a95971dcef3"
  },
  {
    "url": "/vue-wwwid/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
