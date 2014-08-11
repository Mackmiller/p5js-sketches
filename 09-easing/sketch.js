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

  if (dist(x, y, mouseX, mouseY) >= 1) {
    x += distancePerTick * (mouseX - x);
    y += distancePerTick * (mouseY - y);
  }

  point(x, y);
}
