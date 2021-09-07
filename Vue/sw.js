self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
		
		'index2_c.html',
		'formRepas.html',
		'generation.html',
		'manifest.webmanifest',
		'page_badge.html',
		'page_echange.html',
        'page_fiche_repas.html',
        'page_objectif.html',
        'programme-sportif.html',
		'suivigraph.html',
		'calories.html',
		'catalogue_exercice.html',
		'catalogue_programme.html',
		'conseil.html',
		'espace_membre.php',
		'espace_membre.html',
		'imc.html',
		'index2.html',
		'testSaveData.html',
        'app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('index.html');
      });
    }
  }));
});