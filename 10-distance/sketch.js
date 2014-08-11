var maxDistance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0x16, 0x16, 0x1d); // eigengrau
  noStroke();
  maxDistance = dist(0, 0, windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (var i = 0; i <= windowWidth; i += 20) {
    for (var j = 0; j <= windowHeight; j += 20) {
      var size = dist(mouseX, mouseY, i, j) * 66 / maxDistance;
      ellipse(i, j, size, size);
    }
  }
}
