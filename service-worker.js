/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1832ac1007c5b7741b8b9829ac1e49f9"
  },
  {
    "url": "about/index.html",
    "revision": "c8fd62caaa3020b119a56e5a5c6e7e89"
  },
  {
    "url": "assets/css/0.styles.701dae19.css",
    "revision": "81e519ae01fe0d7814640925b47df6b2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.deca8727.js",
    "revision": "2ea87330e54354091c9615b885f5bf28"
  },
  {
    "url": "assets/js/3.54c4b66d.js",
    "revision": "32e62cf9f2b70ff814a02c9fcce4b86f"
  },
  {
    "url": "assets/js/4.72535da8.js",
    "revision": "27bdfd4271d1aecdf44597b0eff74205"
  },
  {
    "url": "assets/js/5.49ab96ac.js",
    "revision": "6534427db515d01a1ba856c156eb86f8"
  },
  {
    "url": "assets/js/6.223f17ee.js",
    "revision": "07dd8b00fbe875014d9fa442c8a5a5db"
  },
  {
    "url": "assets/js/7.94e9bd2f.js",
    "revision": "f2a10aed45d8ddc3f18717bc0275ca17"
  },
  {
    "url": "assets/js/8.13b6d487.js",
    "revision": "f4761c62fa68c160ad123fd0475d8876"
  },
  {
    "url": "assets/js/app.381702fc.js",
    "revision": "4140019f1c2de4c4347c32684e7c9f96"
  },
  {
    "url": "blog/active-invalid-pseudo-class.html",
    "revision": "c54268e36a0ed42a08af3dbf8165d6d3"
  },
  {
    "url": "blog/typescript-function-argv.html",
    "revision": "6bba4b704c9507169b90f2c5c1bcce24"
  },
  {
    "url": "img/logo.png",
    "revision": "f5db1326d6d300dfaea887e3be9d0b20"
  },
  {
    "url": "index.html",
    "revision": "4a76ef4ef926352bdc6e87ce0e047865"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
