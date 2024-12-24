self.addEventListener('fetch', (e) => {
	const url = e.request.url;

	if(/\.jpg$/.test(url)) {
		console.log('Запрос заканчивается на jpg: ', url);
		e.respondWith(
			fetch('/imgs/dr-evil.gif')
		);
	}
});