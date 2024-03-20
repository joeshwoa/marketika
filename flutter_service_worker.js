'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "313e095963b2acc0e9c41e1fc7113a6d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1e0278c8654e7cdcb1e24bd4a4f99e2f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3df75a8888f44c795c5226f196eccfc2",
".git/logs/refs/heads/main": "63f4d89738f8c1ebbf4fb6004c967975",
".git/logs/refs/remotes/origin/main": "1a838e19e3d12c26b674cc71eae48e91",
".git/objects/03/cf3be52c23dfd7ce069feb075d0c31f22eea09": "406caa7b1216a89696eeacc10fb9dd0c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/ce2929cafad826c470afa2a153ddfe427a84f6": "cac78273c028ad09085902632724edc8",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/0a8d4e8125e35b4c0e2c7d0df8df84afa0e70c": "48e976aed71d919265412fc25efb104c",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/30/8d905a25df938200d5c5cb6697df9f0dc3a308": "0377eefbd0f39998001c940d885ed594",
".git/objects/37/00761c19bd7cd81787e8e5a11b10f3ba81d400": "7d6220630f9ad9008ffa0a93278f0e70",
".git/objects/37/4141bff92635db6a9bdaf7fdb0989edbb380d8": "25cbe2f02337f30ca464d032b3ef64ea",
".git/objects/38/18f445049a891acf288696ddc6830c9b2d7ad5": "0d4f26efaf13d53a54d36afcc53f8577",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3e/3aa49e889e10cbbe373b788afebe2c2df91be2": "fb40691e3c4bc47e5ed2061dd3ab4989",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/8975332fbda2f4410eb7f29f4c14d830f1e0bd": "a8f9784968a562abdd3c1d3c91857ba5",
".git/objects/4c/f2089a01bfb44ff1b0e2f28d51aa19970b246e": "4451bf4d0ea42108ad003120897322d0",
".git/objects/4d/7db1d2e151af48008cf0ec4bab2a3d5f0265a7": "ca4e1aa93da11e609da44559bc7b1c0e",
".git/objects/4e/94b22efe6a233c1ba2fe7f634cb23fef0b27c1": "f82353054f5ad0b65894d20830a088e0",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/59/62a92b6dbfe10031152c56f8d6e95ef6fefd9c": "0d7225ccf0016f64fb950dbcb3f0f645",
".git/objects/5b/33f20fb84574427badf59c6c05c139db91585a": "193d6f669fe6a07a52257b3d928f8881",
".git/objects/61/0fc80b6e0db67e1e43c3acac4b3608bc6037d5": "ee54c445e8531ed813b595a79996bbb1",
".git/objects/63/d80ad45d8905c597fbaaf1da8337931da61e9d": "88796dbc3d5e02f96bb3946f2034e704",
".git/objects/68/9268bcf0f0687c759f982d40f5f481b623da2b": "593a1b24ce0f3e54b3fb0b5059a2ef50",
".git/objects/70/87c2239fd7e8d2b0735f6734707a1d40aa1d68": "8cb1ca399e4a96a572f019931a62d17d",
".git/objects/70/dbfcccf9318515b63504522d48a47527b89ffe": "43c9b0c558d292d498320dd6a7e8b757",
".git/objects/7e/cbd9f645dbd186bbde77ad886b087b88632e72": "95a8da9e85b5c262195b9cf8894506f7",
".git/objects/84/1896bd24a4998882ea543bf8e38f83da48ffff": "5ebdffb8759ef91e4d967d37e87d322a",
".git/objects/85/e08bf8a66a8c31eb9f538c821c1744ad901f51": "eb16d228324490b84d46ab93a7749d1f",
".git/objects/86/b8b1a3ee390e49d61bab1559b70834932f89d5": "8df6cff1c6f25c08fd2ae22b0f1ece76",
".git/objects/90/9a67c2802b17ed4feb3b6034c471bc454cda25": "daff77fced47877a0d8a5947b57ae3d9",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/e7c3f906c5177782611984c8daa2639ca97981": "cf5d658b7a247d696827e9facf2882bb",
".git/objects/96/cdddb2d530ade7ecc0399b55101359b4e1981f": "3710a33fbbd281f0310d9dd79a7ca5d0",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/9a/fd110b9985501e85be962bb2401e63a9e05fd0": "4456779bc722e3328dfe5af3175c481c",
".git/objects/9d/dff3ae4f01adff5cda37a7d9b9bbf30e49cb58": "11c586d02222c1bc1daeecb3a751e20d",
".git/objects/a4/81810560b700950595da2f9f85631cb5521878": "eda53f4212b57e9c684453b84cf89221",
".git/objects/ab/9637c2daac403eae29d85c7c34bdbc8de1e098": "41fc183d1804c82afb1c2eefe7c66553",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c8/8bd0ebce49f80ac2f44e25164c35093d177575": "78f832a2b713294d7138018e6aa4541c",
".git/objects/ca/8a7b7da62d2241a49ebea4efb6c4a4cdcc589e": "cfa19a53aa9a420d7e80c1ee2755306d",
".git/objects/cb/ce81280549fe56b05f72537dadcd917a7532c8": "1ecf4d5af5db54746e3fd05f150db872",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/95b5fa74359dffd9161678e10d19dbb830fd9b": "f76a963d1816bde943b70dbd92abe42b",
".git/objects/df/0c7e7c34a0517a996da07f8a0c17729c2d8c4f": "de9dbf03153f969464635faecedfa196",
".git/objects/df/44980cebb0a249df329d1b61a15a91dbe3a2cf": "1ed20b1694afac0b04b67dc4f2921341",
".git/objects/e1/655d379a6c7ec8021437b4c7afd4264922daca": "08d9891de34b0f112138a8fd6a0111c8",
".git/objects/e2/3bd39d246afdc2b3983eb2b7d163d3192ddd93": "757aa1d9f7d8965d9d851a6a2bec2a3b",
".git/objects/e2/ea63f177cf471a3a0e6ca3a0bded3cda95538d": "096f6cabcdebdcb55edba3650c7c6302",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/11614947746c694c375dba2cf978dd2efefc65": "bbaf4252bd5bb532fb63400801a4fec5",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/ef/22e3f9f7182a9d4ae6bee80bf8ea1184e49081": "bf8cf5e689ec20ce81656437dda05a0f",
".git/objects/f3/84e7734b4d5a92aaf7a307d025fb756a59f212": "a6dcbfa6bc254d509339aeea5e1e1241",
".git/objects/f5/494e93f41dbf1032084ea774c8835e319f08a0": "715e37cad7f7bb420745672490258d07",
".git/objects/f6/e3fa435a860184ed0d5f1116c399a16aeaa683": "25686e6eb405c1600ab340ed8452f63d",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/fb/2a1c4a2b5a48c918655852967a4b12f639787e": "463ced238027b443db76c7571c0992e1",
".git/refs/heads/main": "48c50033860599088f94d559b5e50756",
".git/refs/remotes/origin/main": "48c50033860599088f94d559b5e50756",
"assets/AssetManifest.bin": "39a87d31794078d8a3da34b7abdb90ad",
"assets/AssetManifest.bin.json": "9e69cffa3170ea19e14225cd5cfd40a7",
"assets/AssetManifest.json": "8b3ebbbcbc4e862a9e08728f8d272818",
"assets/assets/images/1.png": "d804a72243e8ffa7545a40ce7d1aa5ee",
"assets/assets/images/2.png": "a090d4736953f0f335c9528c66b6e9e7",
"assets/assets/images/316a1d69af900796c3d51245c870f436.png": "8b51f28b97bc7962672bb5216efc44a7",
"assets/assets/images/794dbd7284529b7aedbaacc1828a346e.png": "51129c9e752eb4ecdbce6a67b36833fb",
"assets/assets/images/81641034f2a4b14b63133078112142d5.jpg": "81feb1499c87e2bd79bf1b10c7bf5b84",
"assets/assets/images/ec16b44f2da36668cbc492607b89e14d.jpg": "42d339b697c4ab8b6f03566451a955a8",
"assets/assets/images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/icon-512.png": "6d54f3f0b5f5c74bc03a33d86ca61619",
"assets/assets/images/important.png": "961ba66d2500b84c21af5919179a8805",
"assets/assets/images/instagram.png": "c7e015810c454ea80d3978c115411727",
"assets/assets/images/tik-tok.png": "f6d4517e1cc1297564ab25b01415835b",
"assets/FontManifest.json": "fdb16fa5a241f69713c054de19a9ca3f",
"assets/fonts/MaterialIcons-Regular.otf": "10d532935b96d97da122b09b1a17b7ed",
"assets/images/1.png": "d804a72243e8ffa7545a40ce7d1aa5ee",
"assets/images/2.png": "a090d4736953f0f335c9528c66b6e9e7",
"assets/images/316a1d69af900796c3d51245c870f436.png": "8b51f28b97bc7962672bb5216efc44a7",
"assets/images/794dbd7284529b7aedbaacc1828a346e.png": "51129c9e752eb4ecdbce6a67b36833fb",
"assets/images/81641034f2a4b14b63133078112142d5.jpg": "81feb1499c87e2bd79bf1b10c7bf5b84",
"assets/images/ec16b44f2da36668cbc492607b89e14d.jpg": "42d339b697c4ab8b6f03566451a955a8",
"assets/images/icon-512.png": "6d54f3f0b5f5c74bc03a33d86ca61619",
"assets/images/important.png": "961ba66d2500b84c21af5919179a8805",
"assets/NOTICES": "d4844a46809c2a24782006e93bb44ad4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7e147c4389e68f3b42f1c6606518c440",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "89dc79295c52fd1d8b4634920ed67479",
"icons/Icon-512.png": "dc0fa557ebd8486aa09c3edc51f3aee8",
"icons/Icon-maskable-192.png": "89dc79295c52fd1d8b4634920ed67479",
"icons/Icon-maskable-512.png": "dc0fa557ebd8486aa09c3edc51f3aee8",
"index.html": "6af055dd9901aed8b3e7768f3099e995",
"/": "6af055dd9901aed8b3e7768f3099e995",
"main.dart.js": "7ce68eb31cb5bc9677fbbd54ee970b59",
"manifest.json": "f5190cdcbc645b9d24f0914f646992b2",
"version.json": "2c1f3e8ba61d826b54e449bb5deb99e3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
