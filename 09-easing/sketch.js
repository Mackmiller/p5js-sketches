var x, y;

function setup() {
	createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(50);
  x = windowWidth / 2;
  y = windowHeight / 2;
}

var distancePerTick = 0.05;

function draw() {
  background(0x16, 0x16, 0x1d); // eigengrau

  var dist = Math.sqrt(Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2));
  if (dist >= 1) {
    x += distancePerTick * (mouseX - x);
    y += distancePerTick * (mouseY - y);
  }

  point(x, y);
}
