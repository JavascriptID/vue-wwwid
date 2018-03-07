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

workbox.router.registerRoute(
  new RegExp('^https:\/\/res\.cloudinary\.com.*'),
  workbox.strategies.cacheFirst({
    cacheName: 'wwwid-compressed-img',
    cacheableResponse: {
      statuses: [0, 200], // Make sure 0 is included in this list.
    }
  })
);

workbox.precache([
  {
    "url": "/vue-wwwid/about.bd854afcc8d3bc77a8ad.js",
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
    "url": "/vue-wwwid/category.bd854afcc8d3bc77a8ad.js",
    "revision": "5ebf3a530a9a6aa95e348fe3f7f998cc"
  },
  {
    "url": "/vue-wwwid/detail.bd854afcc8d3bc77a8ad.js",
    "revision": "28600bfb5e75bd3259f7551da56c5f6d"
  },
  {
    "url": "/vue-wwwid/hash.json",
    "revision": "f0db7c721ab2eccb182c67ceb5aa241b"
  },
  {
    "url": "/vue-wwwid/home.bd854afcc8d3bc77a8ad.js",
    "revision": "bf09b18597f97c5a562ae6fe81dd3566"
  },
  {
    "url": "/vue-wwwid/index.html",
    "revision": "13690663993e93e8f6951b25ab470e50"
  },
  {
    "url": "/vue-wwwid/main.8358e8043dd870dbb5ca97d628f8b701.css",
    "revision": "20572037eafabfd4f20ae8272553efdc"
  },
  {
    "url": "/vue-wwwid/main.bd854afcc8d3bc77a8ad.js",
    "revision": "c34ae7182230c998bdb852d78421fd78"
  },
  {
    "url": "/vue-wwwid/manifest.json",
    "revision": "e7a6b84f79cc1b2a7d6a299f2c73b3c0"
  },
  {
    "url": "/vue-wwwid/package.json",
    "revision": "97f1946863bf4ec120446f13ae7bb987"
  },
  {
    "url": "/vue-wwwid/runtime.bd854afcc8d3bc77a8ad.js",
    "revision": "87052e215bed4ecfbdf2902d4bf7aed0"
  },
  {
    "url": "/vue-wwwid/vendor.bd854afcc8d3bc77a8ad.js",
    "revision": "20351349fe6ceb5bddca7a95971dcef3"
  },
  {
    "url": "/vue-wwwid/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
