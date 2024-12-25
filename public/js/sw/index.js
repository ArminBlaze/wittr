
self.addEventListener('fetch', (e) => {
	e.respondWith(
		fetch(e.request).then((response) => {
			if(response.status == 404) {
				return fetch('/imgs/dr-evil.gif');
			}
			return response;
		}).catch(() => {
			return new Response('Ошибка сервера');
		})
	);
});