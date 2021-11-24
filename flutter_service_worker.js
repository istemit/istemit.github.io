'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c1737699eb8343717704941495980bf6",
"index.html": "38877e390013e3f58768447bd06a5142",
"/": "38877e390013e3f58768447bd06a5142",
"main.dart.js": "66cb5d78c4cbce28ec31c1e708a4269c",
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
".git/objects/33/c7e545f9991432e54cd74740a0134cf9743daf": "3563149896df546826199f541f665eea",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/da/3750c64adce34f3da425c8346eb856107de779": "6dba0fa48c7376267d7d566db8d6462f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/cf/0847cdae06912f81bdce1f5554432bf2abf752": "a38ddd61e71d1db8ce5bbee85c7005fb",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/18/22736dd5be47981e7f93e28a56c20bbee8ed2d": "5e181ebfbfd59d8568b54fc083aef964",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/92c47cf70e9e4ab1e796f03a97060ae887ccf3": "4d424ac5244dc6533f8465b57568e6f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/56e1a9e57796e16e2f8243c1b47d18a5172397": "5aa5e76aaab0e6c7abacbeb25e12107d",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5d/cf2c02bc2410261eb1dd6fb2503684d3cc29c6": "b9cbc9dbf3d2ce986b6b42a12283b729",
".git/objects/01/5548ef620ac4a00b1af98bc0939979d4cd8056": "204b001bb395009ce2b7cab0bfb6068c",
".git/objects/d3/3cd1d2b403b5c93b334549e30b6d3e68229148": "45ceeaea0415e40297c419afef0f97e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/bf96c546b1baa31fdf6c394e5ed6d93a20faca": "71136f225e7fce880aa774e5d90e3db6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/ff/c5378828e805ef35770fc5c247983d697d74a9": "f045cc9b4030058599ae6b3e92a77c80",
".git/objects/c5/5d47afc19eea5b47ccc3c5d671e2f601f4337b": "3f39626b1342ac5f1b522063d804b1aa",
".git/objects/e7/9998319f3e7de3efc1b7d365d3888f5f61237a": "d9861bcab7b5e0da8e6befa94b4ff219",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/24/6758f1d7987faa43b956f192492441228e6e8b": "1d70c41330a6f79e08f3efca2fcc7bf5",
".git/objects/40/0aec1e159b1dcb9be768d2b118596f7c1256cf": "6477892f96aac81703e234c1e39c1819",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/b7a0c5ce13ba28e5c31f01e353c8ba4f16b92c": "d98bce78dc991ec7211b217209f4ee1e",
".git/objects/25/3d21d79ac796534974693b1407f874ee9edfc5": "cf2e83eaee0327002998501f6b1f8569",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "54d942f9fd11625a5e5249be0267cb1d",
".git/logs/refs/heads/master": "54d942f9fd11625a5e5249be0267cb1d",
".git/logs/refs/remotes/istemit.github.io/master": "ae19d39c6659109e8e2c817dc7d0ffcd",
".git/refs/heads/master": "a800c0f69d3ef653f274519df7f1f12a",
".git/refs/remotes/istemit.github.io/master": "a800c0f69d3ef653f274519df7f1f12a",
".git/index": "0982ff90ce1eb0d00f64c8af0baf8056",
".git/COMMIT_EDITMSG": "752840b21745838835a08ddbcb0a5071",
".git/sourcetreeconfig": "b0aad88d7a2edc16959b051bac972538",
"assets/AssetManifest.json": "29851b11480a754703df326389b2787a",
"assets/NOTICES": "6aeca6bf2ffc2e73993faa4b70f5b8b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/shurpa.jpg": "39422dd61ad0c48afea0b940add79fd5",
"assets/assets/images/caesar.jpg": "1439b73346387494118d5ce2badf978b",
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
