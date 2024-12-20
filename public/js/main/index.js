import loadScripts from '../utils/loadScripts';
import IndexController from './IndexController';

const polyfillsNeeded = [];

if (!('Promise' in self)) polyfillsNeeded.push('/js/polyfills/promise.js');

try {
  new URL('b', 'http://a');
}
catch (e) {
  polyfillsNeeded.push('/js/polyfills/url.js');
}

loadScripts(polyfillsNeeded, function() {
  new IndexController(document.querySelector('.main'));
});

if (navigator.serviceWorker) {
	navigator.serviceWorker.register('sw.js').then(registration => {
		console.log("ServiceWorker registration successful with scope: ", registration.scope);
	}).catch((error) => {
		console.log("ServiceWorker registration failed: ", error);
	});
}