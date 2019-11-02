/////////////   MAIN FUNCTIONS  ////////////////

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