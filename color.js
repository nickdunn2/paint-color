var Jimp = require("jimp");

// open a file called "image1.jpg"

var avg = "";
Jimp.read("image1.jpg", function (err, image1) {
	if (err) throw err;
	console.log(image1);
	for (var i = 0; i <= image1.bitmap.width - 1; i++) {
		var widthColor = image1.getPixelColor(i, 0);
		avg = (avg + widthColor)/(i + 2);
	}

	for (var j = 0; j <= image1.bitmap.height - 1; j++) {
		var heightColor = image1.getPixelColor(0, j);
		avg = (avg + heightColor)/(j + 2);
	}
	avg = parseInt(avg, 16).toString();
	console.log(avg);
});