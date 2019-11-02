/////////////   MAIN FUNCTIONS  ////////////////

function reactMove(evt) {
  var x = evt.clientX;     // Get the horizontal coordinate
  var y = evt.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor);

  //do some math
  var degrees = 0;

  document.getElementById("tongue").style.transform = "rotate(".concat(degrees.toString(), "deg)");

}

/////////////   SETUP THE HANDLERS  ////////////////

document.addEventListener("mousemove", reactMove);