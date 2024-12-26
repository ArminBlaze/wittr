self.addEventListener('install', function(event) {
  var urlsToCache = [
    '/',
    'js/main.js',
    'css/main.css',
    'imgs/icon.png',
    'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
    'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
  ];
	const name = 'wittr-static-v1';

  event.waitUntil(
    // TODO: open a cache named 'wittr-static-v1'
    // Add cache the urls from urlsToCache
		caches.open(name).then(cache => {
			cache.addAll(urlsToCache);
		})
  );
});

self.addEventListener('fetch', function(e) {
	const url = e.request.url;

	e.respondWith(
		caches.match(url).then(response => {
			if(response) {
				// console.log('Эти данные есть в кеше', url);
				return response;
			}
			else {
				// console.log('!Этих данных нет в кеше', url);
				return fetch(url);
			}
		})
	);
});