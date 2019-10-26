/////////////   MAIN FUNCTIONS  ////////////////

function setup() {
	var c = document.getElementById("mainCanvas"); // gets canvas element from HTML
	c.width = window.innerWidth;     // give canvas same width...
	c.height = window.innerHeight;   // and height as our window.
}

function drawCircle(xcoor, ycoor) {

	var c = document.getElementById("mainCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();

	var centerX = xcoor;  // returns something in [0, 1] * c.width
	var centerY = ycoor; // returns something in [0, 1] * c.height
	var rad = 30;

	var mag = Math.pow((Math.pow(xcoor,2) + Math.pow(ycoor,2)),0.5)
	var diag = Math.pow((Math.pow(c.width,2)+Math.pow(c.height,2)),0.5)

	var colour = function() {return mag/diag*366}

	ctx.strokeStyle = "hsl("+ colour() +",100%, 60%)"; // set orange color for stroke
	ctx.lineWidth = 8;

	ctx.arc(centerX, centerY, rad, 0, 2 * Math.PI);
	ctx.stroke();
}


/////////////   SETUP THE HANDLERS  ////////////////
var isDrawing = false
document.addEventListener("mousedown", e =>{
	isDrawing = true;
});
document.addEventListener("mousemove", e =>{
	if (isDrawing === true) {
		drawCircle(e.clientX, e.clientY);
	}
})
document.addEventListener("mouseup", e=>{
	if (isDrawing ===true){
		isDrawing = false
	}
})
document.addEventListener("DOMContentLoaded", setup);
