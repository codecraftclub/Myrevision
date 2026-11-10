// ആപ്പ് ഇൻസ്റ്റാൾ ചെയ്യാൻ വേണ്ടി മാത്രമുള്ള സർവീസ് വർക്കർ.
// ഒന്നും കാഷെ ചെയ്യുന്നില്ല; അതിനാൽ ഡാറ്റയും അപ്ഡേറ്റുകളും എപ്പോഴും പുതിയതായി തന്നെ ലോഡ് ആകും.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
