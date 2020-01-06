/////////////   MAIN FUNCTIONS  ////////////////

var clickCount = 0;

function setup() {
	var c = document.getElementById("mainCanvas"); // gets canvas element from HTML
	c.width = window.innerWidth;     // give canvas same width...
	c.height = window.innerHeight;   // and height as our window.

}

function reactKey(evt) {
	var c = document.getElementById("mainCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();

	var centerX = Math.random() * c.width;  // returns something in [0, 1] * c.width
	var centerY = Math.random() * c.height; // returns something in [0, 1] * c.height
	var rad = Math.random() * 50 + 40;

	// Extra function to randomly generate color values (0-255)
	var r = function() { return Math.random() * 256 };

	// Call r from above 3 times to make random numbers in string
	ctx.strokeStyle = "rgb(" + r() + ", " + r() + ", " + r() + ")";
	ctx.lineWidth = 8;

	ctx.arc(centerX, centerY, rad, 0, 2 * Math.PI);
	ctx.stroke();


}

function reactMouse(evt) {
	var c = document.getElementById("mainCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();

	// var side = document.getElementById("sideCanvas");
	// var sideCtx = side.getContext("2d");
	// sideCtx.beginPath();

	var centerX = Math.random() * c.width;  // returns something in [0, 1] * c.width
	var centerY = Math.random() * c.height; // returns something in [0, 1] * c.height

	var randSize = Math.random() * 40 + 20;
	ctx.font = randSize + "px Arial";

	var r = function() { return Math.random() * 256 };
	ctx.fillStyle = "rgb(" + r() + ", " + r() + ", " + r() + ")";

	var randLanguage = Math.round(Math.random() * 11);
	var greeting

	if(randLanguage == 1)
	{
		greeting = "Bonjour!";
	}
	else if(randLanguage == 2)
	{
		greeting = "Hola!";
	}
	else if(randLanguage == 3)
	{
		greeting = "你好";
	}
	else if(randLanguage == 4)
	{
		greeting = "ألسّلام عليكم";
	}
	else if(randLanguage == 5)
	{
		greeting = "Здравейте";
	}
	else if(randLanguage == 6)
	{
		greeting = "oi";
	}
	else if(randLanguage == 7)
	{
		greeting = "今日は";
	}
	else if(randLanguage == 8)
	{
		greeting = "Hyvää päivää";
	}
	else if(randLanguage == 9)
	{
		greeting = "	Здравствуйте!";
	}
	else if(randLanguage== 10)
	{
		greeting = "สวัสดี";
	}
	else {
		greeting = "Hello!!!";
	}

	clickCount++;
	ctx.fillText(greeting, centerX, centerY);


	if(clickCount == 20)
	{
		ctx.font = "50px Arial"
		ctx.fillStyle = "black";
		ctx.fillText("You've clicked a lot!", c.width/3, c.height/2)
	}

	if(clickCount == 4)
	{
		ctx.font = "60px Arial"
		ctx.fillStyle = "black";
		ctx.fillText("You've clicked A LOT!".bold(), c.width/3, c.height/2 + 60)

		// sideCtx.font = "60px Arial"
		// sideCtx.fillStyle = "black";
		// sideCtx.fillText("Check", c.width/2, c.height/2);
	}
}

/////////////   SETUP THE HANDLERS  ////////////////

document.addEventListener("keypress", reactKey);
document.addEventListener("mousedown", reactMouse);
document.addEventListener("DOMContentLoaded", setup);
