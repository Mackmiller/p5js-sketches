var lineStarted = false;
var x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  onmouseup = function() {
    lineStarted = false;
  };
  drawInstructions();
}

function drawInstructions() {
  fill(0);
  textFont('Myriad Pro, Arial, sans-serif');
  textSize(20);
  textAlign('center');
  text('Click and drag to draw line segments', width / 2, height - 50);
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
