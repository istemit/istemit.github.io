'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c1737699eb8343717704941495980bf6",
"index.html": "e9a0eee119d89a3f021d6acd36798766",
"/": "e9a0eee119d89a3f021d6acd36798766",
"main.dart.js": "2e9d8bc6f63eb83aa31f3ec5cb982174",
"cors.json": "434eb804728f2a72969effd13fc48333",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cbab184413adc5da3087c1a83c93021a",
".git/config": "8df56e55fe823bb516c78bfce8066cb3",
".git/objects/57/d5fa6af16ee6510a2ec51c715e2d38422acfa0": "a8b510a55b3bdecadb51ffe7774c10a6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/594f1b6d632b29ef8071ab242ada5adc79441a": "607d82eb2068d84ce4f6c7525fc1cd41",
".git/objects/51/6adeff636a0103a5402846012aaaac3db8a3ef": "23e4e250677cfbc6e0dd1889b1fa89df",
".git/objects/67/4d382788009c99cb2fbc5bfacd9179d0790547": "ac187486c767258a98c9672782d5c1ed",
".git/objects/0b/1445588220f783240e9e9c9738925c87d83654": "5222bcbe2cbe8a74e5485af65974d435",
".git/objects/33/c7e545f9991432e54cd74740a0134cf9743daf": "3563149896df546826199f541f665eea",
".git/objects/9c/937bc67be6a663594d3a9c3e001e3c2c01466b": "0506d316339b0932ba9b26f5de8d5f43",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ac/c8bf906e2d9a38de1bb2c31964ffb2d3e62db5": "892499fe1dd59fef67002884bc109122",
".git/objects/ac/73dab508f7c724d4d1faad9930e759d1eec905": "b2bd38a384ceae719a4384d7d7ff98a5",
".git/objects/be/e04b9188b6734eddc01865fca03c486559263f": "b44f348c19212473a25eaa2097490bff",
".git/objects/b3/a469168f76be90be4ba2e479b8635a72c39f46": "77a44992ec17cdd41f4d93a36b918959",
".git/objects/da/3750c64adce34f3da425c8346eb856107de779": "6dba0fa48c7376267d7d566db8d6462f",
".git/objects/d1/da98c36df813f613b2485442eefbb3b90fb11e": "0bc9ad401dd613552923c2f006eb36b4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f4/6e747fd35c60781ed935667c4c250fca9968ac": "676ee4805f03d94e380ef8df48711bef",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9055f543db769038ffb14f590115705ef8398f": "188da69d9ba9e2072245362338215bff",
".git/objects/cf/0847cdae06912f81bdce1f5554432bf2abf752": "a38ddd61e71d1db8ce5bbee85c7005fb",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/c6/90963b368c3c40f1db351ef87a4310e190295d": "255a0ed748fe8daa9a068e00cd3e9fbc",
".git/objects/ec/b9198dc5f86876eee0df14f775d9a99fa53191": "7457e4327230077a2dd6c7a2b1e7a0c9",
".git/objects/18/66c8ecde914e26b1516afd8cff0d82324b22ce": "cfe5e5f1b6ed31ade73bbba651b5a73c",
".git/objects/18/22736dd5be47981e7f93e28a56c20bbee8ed2d": "5e181ebfbfd59d8568b54fc083aef964",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/906050ea4b585e81f42ad9018c0dd23eb84021": "3580794ac27cf00f1ad47ffe97809131",
".git/objects/44/92c47cf70e9e4ab1e796f03a97060ae887ccf3": "4d424ac5244dc6533f8465b57568e6f2",
".git/objects/2f/082027b86324850fbbb20d36e7e6193d904e7c": "4fad17e054a84ec9631bd92266ccd1bb",
".git/objects/88/e6ce5d1ae17b73497fa151d70e92b3b1fb6b81": "67408b461cf51a03fbee82c93bd8ccf2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/56e1a9e57796e16e2f8243c1b47d18a5172397": "5aa5e76aaab0e6c7abacbeb25e12107d",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5d/cf2c02bc2410261eb1dd6fb2503684d3cc29c6": "b9cbc9dbf3d2ce986b6b42a12283b729",
".git/objects/37/5d724ad976b26a10286339763413f682f6b990": "7805abdc43d0763a80eb46fd14f3c9fd",
".git/objects/6d/838939667b2621fabb826461536adb4024dac7": "98bae03bc09a23ee8640199f201f45a4",
".git/objects/01/5548ef620ac4a00b1af98bc0939979d4cd8056": "204b001bb395009ce2b7cab0bfb6068c",
".git/objects/52/5a04dd451e3a54dfead31d890cbaf0e83f473c": "71c691b36baff863789ac0d6d0b08501",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/97/d929f352a5e6bce0c1b21a2721fff9df1286f5": "3b1d0308b7bb3d79084b52a4bb289250",
".git/objects/64/b3bb7938e68c589a4e8c17b70fe2434e009514": "052017becef1136ed4e4e85806055060",
".git/objects/d3/3cd1d2b403b5c93b334549e30b6d3e68229148": "45ceeaea0415e40297c419afef0f97e0",
".git/objects/d4/c7d14951e0f6ad2830558406a1e2042301aab8": "ea8975a835b28ee2d17e43e32166c865",
".git/objects/b6/b3d9bab64781d6ab4ec6e9d9003a1428286779": "77175268b90dc4b02220dc7e4be05939",
".git/objects/af/39bf5e377bd7d30d2f9ebb9c0e9baa53fbc80c": "e317ab4f1a38ceb8f5e906bec0e40c1e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/bf96c546b1baa31fdf6c394e5ed6d93a20faca": "71136f225e7fce880aa774e5d90e3db6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/469eb37f113e92683ae0eb09f1682aed2f5090": "aa443a4ea1451e0eb5e2da92f7b7dc69",
".git/objects/cc/ad6d51f41c0fe61954ac46b78cbed0b282dd36": "1a8ad251d3641a5105650166e1294028",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/ff/c5378828e805ef35770fc5c247983d697d74a9": "f045cc9b4030058599ae6b3e92a77c80",
".git/objects/c5/5d47afc19eea5b47ccc3c5d671e2f601f4337b": "3f39626b1342ac5f1b522063d804b1aa",
".git/objects/e7/9998319f3e7de3efc1b7d365d3888f5f61237a": "d9861bcab7b5e0da8e6befa94b4ff219",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/24/6758f1d7987faa43b956f192492441228e6e8b": "1d70c41330a6f79e08f3efca2fcc7bf5",
".git/objects/8c/4d6b13964faff65260a0771cbb18ed04bfb547": "e9ea2807d24887970aae2834d5075998",
".git/objects/40/85ad5750ddbc955a07b0300151629b43dbb2f4": "55770c3a2a0bd4c7911f274a6b59a795",
".git/objects/40/0aec1e159b1dcb9be768d2b118596f7c1256cf": "6477892f96aac81703e234c1e39c1819",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/b7a0c5ce13ba28e5c31f01e353c8ba4f16b92c": "d98bce78dc991ec7211b217209f4ee1e",
".git/objects/25/3d21d79ac796534974693b1407f874ee9edfc5": "cf2e83eaee0327002998501f6b1f8569",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "e9051be3b24e82b3cd2172500d9c3acb",
".git/logs/refs/heads/master": "e9051be3b24e82b3cd2172500d9c3acb",
".git/logs/refs/remotes/istemit.github.io/master": "4de31b875050e321f5cf3bd49d51e9cc",
".git/refs/heads/master": "c2b912fdb505cab04d976be6aed54e05",
".git/refs/remotes/istemit.github.io/master": "c2b912fdb505cab04d976be6aed54e05",
".git/index": "7f718210accd501963b054c01c234ab3",
".git/COMMIT_EDITMSG": "1ceed3de0b21a49ada6b47866207d824",
".git/FETCH_HEAD": "350c654f99a14597725f04d0d41d8bec",
".git/sourcetreeconfig": "19223fbd61a9f9101a362d8abce3cf7d",
"assets/AssetManifest.json": "4256820d527227f17f724948c5693499",
"assets/NOTICES": "8ed0338f4ea419af38b522566e1ddc48",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/shurpa.jpg": "39422dd61ad0c48afea0b940add79fd5",
"assets/assets/images/caesar.jpg": "1439b73346387494118d5ce2badf978b",
"assets/assets/images/2ea2ea45308049a29e3f5fe8832eda9d--coffee-shop-logo-coffee-shops.jpg": "b3786df43c0ba9b064583cd43eb5482e",
"assets/assets/images/rest_header.jpg": "2f4276e56fb40cffa4199213f79c57b7",
"assets/assets/images/salad.jpg": "3390e05dd083a3f871b41f6323391c53",
"assets/assets/images/plov.jpg": "58864f7ae57cef89b17069ae11bfa169",
"assets/assets/images/achichuk.jpg": "7d8b30cdfbb576a9571a0a6fa958cd2b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
