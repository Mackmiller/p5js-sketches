var flock;

function setup() {
  createCanvas(windowWidth, windowHeight);
  flock = new Flock();

  for (var i = 0; i < 100; i++) {
    flock.addBoid(new Boid(width / 2, height / 2));
  }
}

function draw() {
  background(0x1d, 0x1d, 0x1f);
  flock.run();

  if (mouseIsPressed) {
    flock.addBoid(new Boid(mouseX, mouseY));
  }

  drawInstructions();
}

function drawInstructions() {
  fill(255);
  textFont('Myriad Pro, Arial, sans-serif');
  textSize(20);
  textAlign('center');
  text('Click to add more boids', width / 2, height - 50);
}
