function setup() {
  createCanvas(windowWidth, windowHeight)
  fill(0);

  drawInstructions();
}

function drawInstructions() {
  textFont('Myriad Pro, Arial, sans-serif');
  textSize(20);
  textAlign('center');
  text('Click to create a circle', width / 2, height - 50);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 40, 40)
  }
}
