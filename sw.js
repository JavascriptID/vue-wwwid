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
    "url": "/vue-wwwid/about.ca76a6a5b5c961f29cae.js",
    "revision": "4ebaaecb1d809723b532c10668242a2e"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "assets/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "assets/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "assets/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "assets/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "assets/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "assets/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "/vue-wwwid/detail.ceec17be5125a3cc5393.js",
    "revision": "e521c5df55e3a3c57483b0cbb62518a8"
  },
  {
    "url": "/vue-wwwid/home.b0cf6310588a4d2fb2d8.js",
    "revision": "72129764d4d51abb9b3befb9e19d111b"
  },
  {
    "url": "/vue-wwwid/index.html",
    "revision": "500f0596fc3c3a86c7472e23fd6484c3"
  },
  {
    "url": "/vue-wwwid/main.77e505a256ad6f3e610fb76ee2215390.css",
    "revision": "200199c125a9cb5b7dad8413a4f4d1d8"
  },
  {
    "url": "/vue-wwwid/main.c12c1c757866fa3d55a5.js",
    "revision": "d6e80484af9862d9281369007bbb3c5c"
  },
  {
    "url": "/vue-wwwid/manifest.0c6f4710d847217cc5d5.js",
    "revision": "08242cb8040730aa38b8a4bdc87d5356"
  },
  {
    "url": "/vue-wwwid/manifest.json",
    "revision": "e7a6b84f79cc1b2a7d6a299f2c73b3c0"
  },
  {
    "url": "sw.js",
    "revision": "bd5b5208d6aadcf8f235896aee9bbffc"
  },
  {
    "url": "/vue-wwwid/vendor.d386efa7cefc2001e016.js",
    "revision": "b12665b49832ddd4d86b680ed0b40f72"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);
