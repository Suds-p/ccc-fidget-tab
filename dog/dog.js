/////////////   MAIN FUNCTIONS  ////////////////

//make another dog appear on click
function click(evt) {
  var div = document.createElement("div");
  
  //dog image
  var dog = document.createElement("img");
  dog.src = "dog.png";

  var original_width = dog.width; 
  var original_height = dog.height; 

  dog.width = Math.random() * 200 + 50;
  dog.height = dog.width * (original_width / original_height);

  div.style.position = "fixed";
  div.style.marginLeft = evt.clientX - (dog.width / 2) + 'px'; 
  div.style.marginTop = evt.clientY - (dog.height / 2) + 'px';

  // tongue.src="tongue.png";
  // tongue.class="tongue";

  div.appendChild(dog);

  var tongue = document.createElement("img");
  div.appendChild(tongue);

  document.body.appendChild(div); 
}

function reactMove(evt) {
  var x = evt.clientX;     // Get the horizontal coordinate
  var y = evt.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor);

  //get coordinates of tongue area of specific dog 
  var dogX = 532;
  var dogY = 419;

  //calculate angle between mouse coordinate and tongue coordinate
  var degrees = (180 / Math.PI) * Math.atan((x - dogX) / y - dogY);
  console.log(degrees);

  document.getElementById("tongue").style.transform = "rotate(".concat(degrees.toString(), "deg)");

}

/////////////   SETUP THE HANDLERS  ////////////////

document.addEventListener("mousemove", reactMove);
document.addEventListener("mousedown", click);