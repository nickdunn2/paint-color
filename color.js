var Jimp = require("jimp");

// open a file called "image1.jpg"
var redAvg = 0;
var greenAvg = 0;
var blueAvg = 0;

Jimp.read("red.jpg", function (err, red) {
	if (err) throw err;
	console.log(red);
	red.scan(0, 0, red.bitmap.width, red.bitmap.height, function(x, y, idx) {

		redAvg += red.bitmap.data[ idx + 0 ];
		redAvg = redAvg / 2;
		greenAvg += red.bitmap.data[ idx + 1 ];
		greenAvg = greenAvg / 2;
		blueAvg += red.bitmap.data[ idx + 2 ];
		blueAvg = blueAvg / 2;

	});
	console.log(redAvg, greenAvg, blueAvg);

	function componentToHex(c) {
	    var hex = c.toString(16);
	    return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
	    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	console.log(rgbToHex(redAvg, greenAvg, blueAvg))
	// average = average.toString(16).slice(0,6);
	// console.log(average);
});

// pull out r,g,b each time, convert to hex