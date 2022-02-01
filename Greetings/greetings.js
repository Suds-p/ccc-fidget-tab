/////////////   MAIN FUNCTIONS  ////////////////

var clickCount = 0;

function setup() {
	var c = document.getElementById("mainCanvas"); // gets canvas element from HTML
	c.width = window.innerWidth;     // give canvas same width...
	c.height = window.innerHeight;   // and height as our window.

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

	var randLanguage = Math.round(Math.random() * 20);
	var greeting = "";

	switch (randLanguage) {
		case 1: greeting = "Bonjour!"; break;
		case 2:	greeting = "Hola!"; break;
		case 3:	greeting = "你好"; break;
		case 4:	greeting = "ألسّلام عليكم"; break;
		case 5:	greeting = "Здравейте";
		case 6:	greeting = "oi"; break;
		case 7:	greeting = "今日は"; break;
		case 8:	greeting = "Hyvää päivää"; break;
		case 9:	greeting = "Здравствуйте!"; break;
		case 10:	greeting = "สวัสดี"; break;
		default:	greeting = "Hello!!!"; break;
	}

	clickCount++;
	ctx.fillText(greeting, centerX, centerY);

	if(clickCount == 4)
	{
		ctx.font = "60px Arial"
		ctx.fillStyle = "black";
		ctx.fillText("You've clicked A LOT!", c.width/3, c.height/2 + 60)
	}
}

/////////////   SETUP THE HANDLERS  ////////////////

document.addEventListener("mousedown", reactMouse);
document.addEventListener("DOMContentLoaded", setup);
