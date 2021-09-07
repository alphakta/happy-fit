// register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {
    //scope: '/happyfit-2021/service-worker/sw-test/' //'/sw-test/'
  }).then(function (reg) {
    reg.update();
    if (reg.installing) {
      console.log('Service worker installing');
    } else if (reg.waiting) {
      console.log('Service worker installed');
    } else if (reg.active) {
      console.log('Service worker active');
    }

  }).catch(function (error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

// GET DATA
async function getCachedData(cacheName, url) {
  console.log("getCachedData")
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  return await cachedResponse.json();
}