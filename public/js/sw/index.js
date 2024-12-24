self.addEventListener('fetch', (e) => {
	e.respondWith(
		fetch('/imgs/dr-evil.gif')
	);
});