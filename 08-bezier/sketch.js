function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255, 100);
  background(0);
  noFill();
}

function draw() {
  for (var i = 0; i < 200; i += 20) {
    bezier(mouseX - (i / 2.0), mouseY - (i / 2.0), 410, 20, 440, 300, 240 - (i / 16.0), 300 + (i / 8.0));
  }
}
