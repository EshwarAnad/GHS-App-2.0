// Set a name for the current cache
var cacheName = 'v1';

// Default files to always cache
var cacheFiles = [
	'./',
	'./index.html',
	'./js/app.js',
	'./css/reset.css',
	'./css/style.css',
	'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic'
]


self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Installed');

    // e.waitUntil Delays the event until the Promise is resolved
    e.waitUntil(

        // Open the cache
        caches.open(cacheName).then(function (cache) {

            // Add all the default files to the cache
            console.log('[ServiceWorker] Caching cacheFiles');
            return cache.addAll(cacheFiles);
        })
    ); // end e.waitUntil
});
