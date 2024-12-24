self.addEventListener('fetch', (e) => {
	e.respondWith(
		new Response('Hello <b class="a-winner-is-me">world</b>', {
			headers: { "Content-Type": "text/html" }
		})
	);
});