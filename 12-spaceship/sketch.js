var ship;
var anyKeyPressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship(new p5.Vector(width / 2,  height / 2));
}

function draw() {
  background(0x1d, 0x1d, 0x1f);

  ship.run();
  ship.render();

  if (!anyKeyPressed) {
    drawInstructions();
  }
}

function drawInstructions() {
  fill(255);
  textFont('Myriad Pro, Arial, sans-serif');
  textSize(20);
  textAlign('center');
  text('Use arrow keys to move around', width / 2, height - 50);

  if (keyIsPressed) {
    anyKeyPressed = true;
  }
}
