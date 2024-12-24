self.addEventListener('fetch', (e) => {
	e.respondWith(
		new Response('Hello <b>world</b>', {
			headers: { "Content-Type": "text/html" }
		})
	);
});