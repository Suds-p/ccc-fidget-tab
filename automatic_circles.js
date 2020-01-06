/////////////   MAIN FUNCTIONS  ////////////////

var points = Array(5).fill([]);
var currentCircIndex = 0;

function setup() {
	var c = document.getElementById("mainCanvas"); // gets canvas element from HTML
	c.width = window.innerWidth;     // give canvas same width...
	c.height = window.innerHeight;   // and height as our window.

	setInterval(reactKey, 2000);
}

function reactKey(evt) {
	var c = document.getElementById("mainCanvas");
	var ctx = c.getContext("2d");
	// ctx.clearRect(0, 0, c.width, c.height);

	var centerX = Math.random() * c.width;  // returns something in [0, 1] * c.width
	var centerY = Math.random() * c.height; // returns something in [0, 1] * c.height

	points[currentCircIndex] = [centerX, centerY];
	currentCircIndex = (currentCircIndex + 1) % 5;

	console.log(points);

	for (point in points) {
		if (point !== []) {
			drawCircle(ctx, point[0], point[1]);
		}
	}
}

function drawCircle(ctx, centerX, centerY) {
	ctx.beginPath();
	
	var rad = Math.random() * 50 + 40;

	// Extra function to randomly generate color values (0-255)
	var r = function() { return Math.random() * 256 };

	// Call r from above 3 times to make random numbers in string
	ctx.strokeStyle = "rgb(" + r() + ", " + r() + ", " + r() + ")";
	ctx.lineWidth = 8;

	ctx.arc(centerX, centerY, rad, 0, 2 * Math.PI);
	ctx.stroke();
}

/////////////   SETUP THE HANDLERS  ////////////////

document.addEventListener("keypress", reactKey);
document.addEventListener("DOMContentLoaded", setup);