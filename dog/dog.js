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

  div.appendChild(dog);

  var tongue = document.createElement("img");

  tongue.src = "tongue.png";
  tongue.classList.add("tongue2");
  tongue.width = dog.width * .136;

  tongue.style.position = "fixed";
  tongue.style.marginTop = ((52 * dog.height) / 112).toString() + "px";
  tongue.style.marginLeft = ((-63 * dog.width) / 117).toString() + "px";
  tongue.style.transformOrigin = "20% 0%";

  div.appendChild(tongue);

  document.body.appendChild(div);
}

function tongueAngle(evt) {
  var x = evt.clientX;     // Get the horizontal coordinate
  var y = evt.clientY;

  var tongues = document.getElementsByClassName("tongue2");
  for (var i = 0; i < tongues.length; i++) {
    var tongue = tongues.item(i);
    var dogX = tongue.getBoundingClientRect().left + tongue.getBoundingClientRect().width / 2;
    var dogY = tongue.getBoundingClientRect().top + tongue.getBoundingClientRect().height / 2;
    //calculate angle between mouse coordinate and tongue coordinate
    var degrees = (180 / Math.PI) * Math.atan((dogX - x) / (y - dogY)) + 45;
    if (y < dogY) { degrees += 180; }
    tongue.style.transform = "rotate(".concat(degrees.toString(), "deg)");
  }

}

/////////////   SETUP THE HANDLERS  ////////////////
document.addEventListener("mousemove", tongueAngle);
document.addEventListener("mousedown", click);