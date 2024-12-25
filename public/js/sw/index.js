self.addEventListener('fetch', (e) => {
	e.respondWith(
		fetch(e.request).then((response) => {
			if(response.status == 404) {
				return new Response('Ошибка. Не найдено.');
			}
			return response;
		}).catch(() => {
			return new Response('Ошибка сервера');
		})
	);
});