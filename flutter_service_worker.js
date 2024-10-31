'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "08a404e8104df8758f2e538c486e8958",
".git/config": "e71c5dd64aecd89497ce03743b8b8b34",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de78d28f8b7b845534708e920d7476d3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d2540a8fbecbdf0086cf3f850254fbd8",
".git/logs/refs/heads/master": "d2540a8fbecbdf0086cf3f850254fbd8",
".git/logs/refs/remotes/origin/master": "081b3754c3eaef87f069061849ce901e",
".git/objects/01/9620b806ddc33530391e82dc5dcdd5f01a20da": "05291a82175808f95848a1a11e258bf8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/14b51a733bf1712b67e20253c6f65580cbbd05": "cd73aae7e57d2c421b7ac278c9f4c2ae",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/719bb99d34dce16e633ac14364f80548bcb5f8": "c13a71d263d3c61e8746b92bea3114e3",
".git/objects/0c/926c9d34cc12ce1e46cc09333418493a0495ad": "ba7e76052cc5801a4ea6f7cc83055aae",
".git/objects/10/f5ef210ee84aa98edee37c9f53c67f5e323fa0": "bb77caa17a667c18b018ecbf80c969ee",
".git/objects/16/1573ba7ada699d93732c721c7c97d91997bc08": "87d103a78392d06d12d39959634fa78e",
".git/objects/17/0f4e66eb2213cbd9b91f67eaffe5d9d75bd1a0": "9dea1e43c802a35ca95416c5565224aa",
".git/objects/17/a2edbea5aa6a0ecbe89a096336a1ec19150161": "1ebe62ed897f26a0bd5670c03e786d4d",
".git/objects/19/c724fd11d3281c464568257294a70c7595155a": "6cf49e98ec221da7ad08ad0b1c62d26f",
".git/objects/1b/d1a016f68a478ede439ebc7721595183029fe2": "0e73c3a1e615f4696d89af0bcf83a98c",
".git/objects/1e/77538ce5bc98dfac3f355ef4cc1b901789dd23": "bd0a7babd4d8421de8c7fd37770eaecd",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/e8fe764b789cb4287c8b9fde9980a0f29ed13b": "9494ee26d2a5f7d0bc6497a472546850",
".git/objects/20/fa992b87e65ff38484067408e771ccbd4175d8": "9c094415fb373d372f8d1b340fb72b68",
".git/objects/23/73be9f5c76199ec8070b7250028f7a87651df8": "cd83e479ea55f7cf2ef1bd9775bc4775",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/c013b81c34485ab7130c06d5208e2bfce60bd7": "03da418d8a7c24af8b26ebdf0ccbcfc5",
".git/objects/28/f5e30116b1ac66348d4cb241736fbaa588c7a9": "d93949c7088fd012da98e34ecccd4bbb",
".git/objects/29/53dd59a8a5b42304091d6ff4a4c0d7653a68fd": "94f9f3c8e31d353449b0e11cc9e02ab6",
".git/objects/29/c671da3b1f303ac79f91ac023e49fe6bc042de": "13f3d6afc01b46e4b2ce9f010312c9a1",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/4c325b7e3a8ac57c35dabfd2e65d312e069225": "4af0af0b53ed09d6d2848718de9c7f0a",
".git/objects/36/c0fbd576a583bafafcea058eeece954ebe7b4b": "d1591f05cd2c606f3e974ed32ac6edbb",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/4bd3f13e6fac528b921a3c5edda3667b714252": "f3663cbc43287e8e6b7dec6f10947ea5",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/834d06ecd3a5fa6d5d49328a35e25c60659c6b": "c54dcd1e4747959cef5cad7e8dc55f98",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/daa8cba8411d3e16f6ec9d4e6326d827ea8df4": "f041201584e4a1196a19458ff8792244",
".git/objects/4f/6ab273267d645529cd3119503a21e7bfbf2461": "1ce495f8b6c9ed3e52e39e22c43f1b9a",
".git/objects/52/ece37bc80e2b60f5a6d0eba351fe8dbe4ff7fe": "7928a45bbf264df3563889d3c3c95f0f",
".git/objects/57/03abaf0a4ace2278f9185b263c0af35498170b": "28651a070aadd63d81fe1d2e8a517ac1",
".git/objects/59/24d1684c71f35e38b323b30baeba7a032bb278": "f57ac04397b1c51fef006abb53e12183",
".git/objects/59/7a5dc611a793a92381e2200206774607909919": "b4af80712cb150d28755d276d5487899",
".git/objects/59/ca89cd8861a9bdbae7f9678c6e6c07ac2ab517": "0a9d824ee38f8d0644eefe7d77264004",
".git/objects/64/92124c8dba3e5575663fb6a2de3028f7da9149": "a6da8d712e48702495edd9e464f1b6aa",
".git/objects/69/5061e39f7966b156a5a8d61003393e763ac9b3": "d44f09eeb9df263c565f2d2c447564fa",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/422354505d054a30de85ad4d77f455ee4eb513": "f24f720a56854fa46e2216883d7c89f1",
".git/objects/79/52a9887e22dafffa4bdf165ac0242399a22917": "ea4639cc4eb1d775f263bd8956a24dfc",
".git/objects/7a/d855141c5d9a6b2376a801ca0da320c722703a": "7233585c823147f29686f1cb632f9eb7",
".git/objects/80/8081675de379e9307ee1d784c1aff9b29f4a25": "569bb98ad2bd3e3dce4d976d7c89e87a",
".git/objects/81/cb31e79b9a95d9b6f45f6f76d8b12921bfe3e9": "bf50e7f4d0352e275903cd1eda15f0db",
".git/objects/81/f51ed767f54937cc4372111aacf11d84c45756": "bdf0d290b17f49ad71ef41747d192133",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/96db1a4981d4ff8ab78b1c95e6e06c746a58a2": "71e7c294d1186403ccd537839a24be7b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/98340bf5c5321798e8115676e98e067287541c": "c67e79deef985803253839a6bb521527",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/bf6556bfe3ac27959d22252f949b2d7d96958b": "c98b2b424fa941b820dcb3893f7e2dbd",
".git/objects/9a/cd7e1016753098c9d8bdf5c239904008525c15": "6113ae799ce6b18574c9d9dd1e274784",
".git/objects/9b/66af76baf52d66fc58606a6c92e423d3e3e399": "9ebf364f0fcebe5a665d191d2fa27186",
".git/objects/9c/05b12f49515e595b1cb5832c6d11762b0b5551": "dd5a38c80957db3eac4da0cae5cae8f0",
".git/objects/a1/8a2344410239ae6029a94216bbb7dbfe7f41c2": "324966caab67672e7f6633bd5d391b03",
".git/objects/a1/c0572aee13913bdf0d62650e1f53911a880c08": "f77ae641e06e4f6c1ce3a0ca0d1d02a4",
".git/objects/a4/835d371d70cd68814a7938cb19dc8b68501d30": "7d29d78832e4182f280f179833d78fbb",
".git/objects/a6/d102a57bb663f6aa1dd7707d142504f1ca3d76": "501498e8bb764ded2b6194c177c9b12e",
".git/objects/a6/fc00234a0a78714c324d9ccaab29cf3522b022": "f46d13058458c11998aafd6820f498a1",
".git/objects/ae/52b0b60b244c32e1b52ef5057d4ae95346bbec": "98a739f5df7e3a3afcca4028b126419e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/c68db966d00d7bb47d4511aa9c95b22b30c97b": "6a7b1999b18d792e96eec2a0bc8e8c7a",
".git/objects/b1/e96ff0d31b0d68384a2282142be20b8700b036": "d90038d6a292c35a28944e446c011d95",
".git/objects/b2/47d87e21da407043bd63f5b896cd455b629ecc": "cf738114542174f6d09105e149b0ddbc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5df074e6203bac81b5f32085c63ee0ab08c015": "58aa072c92c8c2f28fa7f5adacdae90b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/c96abe15405cab6683393f11bf8451cce0716f": "95f3534e13ac30597fe53976ee82c7ca",
".git/objects/be/1a178c46753ce3eb8758d40a72608fbf10d02b": "9c1e09c61e93a97f79edab98cad7655f",
".git/objects/be/46db0a7775fd39c99555353b715592e88472cd": "ac9b65911935e0f93f30cff22dc2cc53",
".git/objects/c8/504710eb241fd2c38d0ed6b8d497ce8eb3b13c": "7a76db83651c1047230b8c46cd60cb5a",
".git/objects/c8/5ee0e982adc088fcb89fa28595aea0765ac359": "50de69d0d721f00b6e742a17c84621c0",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/705c9fc38589c6e74a76573a24eb1cc7e37357": "40350b9ded653af9ab5593f6e5f7fab6",
".git/objects/d0/d22ea587a4793d75619391213340077c2550b3": "ff2bc6ebd6c34b0f1f0db4de7924609e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/f7978d540ddfeeca8f1a784d895f4d1ee6e3fa": "9ba3a993e31c9578a4404248e716b9dc",
".git/objects/d8/807cadfe84b95825936c1f75a945d3d7eb3083": "3e4a4558bb89253f5f85761b194c1dbf",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/79015c4feec424a6359346f362c21c871b9c41": "40c526d84174540c2c8664102d625c14",
".git/objects/e2/d9ed7d7404ac5bfc6ec762ac486546af81a6a6": "d5293e68b17fbae911fc03c097603ab5",
".git/objects/e4/e470b83f4d878cbb926e7f41d571440df90499": "0cc4314c0023dee727e726190569f866",
".git/objects/e5/81b5e90d2591b9aa2d78ea632e98b3f7aee2c3": "3e3a584e714bfca079c0d9457427b247",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/5d77b2030317fc6eb68318d41f5f2994dd2820": "8ecb66188367e5eb2e2dc2fc15fe769a",
".git/objects/ef/5011f4ec3b687563e95c71752f9934bda50118": "8aec4c9b24cce7e8a01c958ae0305125",
".git/objects/ef/677c8e33a671fff2597998d6e6968a85795b33": "2e929d0d69ec7827b848d3a131b4c2e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/be072081f1fe105592c0559d04a1fb95262fce": "39f5b15c2df5dd8ed6fc0f60d92132fd",
".git/objects/f9/08512de4bae6a66f4fb5428dd68dc5dfc83421": "0e4a4f8bfdff60b11fb6609ef44cd02e",
".git/refs/heads/master": "5e82998e044601dac3e68a4f5dfc820c",
".git/refs/remotes/origin/master": "5e82998e044601dac3e68a4f5dfc820c",
"assets/AssetManifest.bin": "85344ce7e056adca6dbf1e26a660f533",
"assets/AssetManifest.bin.json": "11096e3ffd2a83ca1c567f77516546af",
"assets/AssetManifest.json": "59539adfc7389c9122766ec68a3b0959",
"assets/assets/panchang_logo.jpg": "85e2423489a99b1c8e0cc179ba98232f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58922b73012d07a8cc4dc0fb519739d8",
"assets/NOTICES": "0b4470b6d030877c68fe70e41377cc51",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "336f1a433e7175f3fbe9052b5a57090c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "386ad1ae470565a33e17d00be8613699",
"icons/Icon-192.png": "ceaad34cfe0dcfcff62f76aea4d785be",
"icons/Icon-512.png": "e10e623aabc743c71b1a62c2a5c6116f",
"icons/Icon-maskable-192.png": "ceaad34cfe0dcfcff62f76aea4d785be",
"icons/Icon-maskable-512.png": "e10e623aabc743c71b1a62c2a5c6116f",
"index.html": "9fc6cec4e90726d10c43c2e7f3a94831",
"/": "9fc6cec4e90726d10c43c2e7f3a94831",
"main.dart.js": "94868bd25efea41d467726b12348486b",
"manifest.json": "ed1526742fa3c042b2728a0a1f38f690",
"version.json": "adb48a1cadb6801622dc3969b60a510f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
