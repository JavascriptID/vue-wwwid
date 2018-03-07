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
    "url": "/vue-wwwid/about.7bcf78193aaad17d45ae.js",
    "revision": "06681476d7e76dab3bfe0dca02b231b9"
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
    "url": "/vue-wwwid/category.7bcf78193aaad17d45ae.js",
    "revision": "4f93ec0ebd6eacb988870f567d17775a"
  },
  {
    "url": "/vue-wwwid/detail.7bcf78193aaad17d45ae.js",
    "revision": "a79326c65ed0ad6b765f8e9bf1e28f57"
  },
  {
    "url": "/vue-wwwid/hash.json",
    "revision": "b00a8dc433a16e190758c264af47e878"
  },
  {
    "url": "/vue-wwwid/home.7bcf78193aaad17d45ae.js",
    "revision": "39b99e04a636a52689ace14b69088727"
  },
  {
    "url": "/vue-wwwid/index.html",
    "revision": "44b498a36881df01c7b8dfacd141a1bb"
  },
  {
    "url": "/vue-wwwid/main.7bcf78193aaad17d45ae.js",
    "revision": "592b1ba46d65944b00366c8562c593f0"
  },
  {
    "url": "/vue-wwwid/main.c67ba3590f7e57398a15da1ca0b75bcc.css",
    "revision": "175e283d83e269e6bb810ab81a9a42e0"
  },
  {
    "url": "/vue-wwwid/manifest.json",
    "revision": "832605a36d1fe40d4ee5487c4fb1a488"
  },
  {
    "url": "/vue-wwwid/package.json",
    "revision": "1175a79cc8e26f3f528867e815938bca"
  },
  {
    "url": "/vue-wwwid/runtime.7bcf78193aaad17d45ae.js",
    "revision": "5eff4036d8b089f1b6752eb433f7350c"
  },
  {
    "url": "/vue-wwwid/vendor.7bcf78193aaad17d45ae.js",
    "revision": "20351349fe6ceb5bddca7a95971dcef3"
  },
  {
    "url": "/vue-wwwid/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
