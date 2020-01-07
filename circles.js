/////////////   MAIN FUNCTIONS  ////////////////

// var listOfCircles;

// function setup() {
// 	var c = document.getElementById("mainCanvas"); // gets canvas element from HTML
// 	c.width = window.innerWidth;     // give canvas same width...
// 	c.height = window.innerHeight;   // and height as our window.
// 	listOfCircles = [];
// }

// list would include [x, y, rad]
// function deleteCircle(){
// 	var c = document.getElementById("mainCanvas");
// 	var ctx = c.getContext("2d");
// 	ctx.beginPath();

// 	var circle = listOfCircles.shift();
// 	ctx.strokeStyle = "rgb(255, 255, 255)"; // replace with background color
// 	ctx.lineWidth = 10; 

// 	ctx.arc(circle[0], circle[1], circle[2], 0, 2 * Math.PI);
// 	ctx.stroke();
// }

// function reactKey(evt) {
// 	var c = document.getElementById("mainCanvas");
// 	var ctx = c.getContext("2d");
// 	ctx.clearRect(0, 0, c.width, c.height);

// 	// Extra function to randomly generate color values (0-255)
// 	var r = function() { return Math.random() * 256 };

// 	var centerX = Math.random() * c.width;  // returns something in [0, 1] * c.width
// 	var centerY = Math.random() * c.height; // returns something in [0, 1] * c.height
// 	var rad = Math.random() * 50 + 40;
// 	var color = "rgb(" + r() + ", " + r() + ", " + r() + ")";
// 	var lineWidth = 8;

// 	listOfCircles.push([centerX, centerY, rad, color, lineWidth]);

// 	if (listOfCircles.length === 10) {
// 		listOfCircles.shift();
// 	}

// 	for (var i = 0; i < listOfCircles.length; i++){
// 		ctx.beginPath();
// 		ctx.strokeStyle = listOfCircles[i][3]; 
// 		ctx.lineWidth = listOfCircles[i][4];

// 		ctx.arc(listOfCircles[i][0], listOfCircles[i][1], listOfCircles[i][2], 0, 2 * Math.PI);
// 		ctx.stroke();
// 	}
// }

/////////////   SETUP THE HANDLERS  ////////////////

// document.addEventListener("keypress", reactKey);
// document.addEventListener("DOMContentLoaded", setup);



$(document).ready(function() {
	$('.trigger, .popup').click(function() {
		$('.popup').toggleClass('close');
	});
});