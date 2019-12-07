/////////////   MAIN FUNCTIONS  ////////////////

function setup() {
	var c = document.getElementById("mainCanvas"); // gets canvas element from HTML
	c.width = window.innerWidth;     // give canvas same width...
	c.height = window.innerHeight;   // and height as our window.
}

function reactKey(evt) {
	var c = document.getElementById("mainCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();

	var topKeys = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112];
	var middleKeys = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];

	var centerX;
	var centerY; 
	var color;
	
	if (topKeys.includes(evt.keyCode)) {
		centerY = Math.random() * (c.height / 3);
		color = "rgb(255," + Math.random() * 255 + ", 0)";
	} else if (middleKeys.includes(evt.keyCode)) {
		centerY = Math.random() * (2*c.height / 3) + (c.height/3);
		color = "rgb(" + Math.random() * 255 + ", 255, 0)";
	} else {
		centerY = Math.random() * (c.height) + (2*c.height / 3);
		color = "rgb(0," + Math.random() * 255 + ", 255)";
	}

	centerX = Math.random() * c.width;  // returns something in [0, 1] * c.width
	var rad = Math.random() * 50 + 40;

	// Call r from above 3 times to make random numbers in string
	ctx.strokeStyle = color;
	ctx.lineWidth = 8;

	ctx.arc(centerX, centerY, rad, 0, 2 * Math.PI);
	ctx.stroke();
}

/////////////   SETUP THE HANDLERS  ////////////////

document.addEventListener("keypress", reactKey);
document.addEventListener("DOMContentLoaded", setup);