var lineStarted = false;
var x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  onmouseup = function() {
    lineStarted = false;
  };
}

function draw() {
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(3);
    point(mouseX, mouseY);

    if (lineStarted) {
      stroke(0);
      strokeWeight(1);
      line(x, y, mouseX, mouseY);
    }

    x = mouseX;
    y = mouseY;
    lineStarted = true;
  }
}
