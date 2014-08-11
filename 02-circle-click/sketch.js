function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  if (mouseIsPressed) {
    fill(0)
    ellipse(mouseX, mouseY, 40, 40)
  }
}
