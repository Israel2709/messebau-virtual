const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['public/img/icons/*.{jpg,png,jpeg}'], {
		destination: 'public/img/optimized/icons',
		plugins: [
			imageminWebp({quality: 50})
		]
	});

	console.log('Images optimized');
})();
