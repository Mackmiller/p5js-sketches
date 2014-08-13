var cat;

function preload() {
  // original source: http://fc01.deviantart.net/fs71/i/2010/181/e/a/Cat_Sketch_by_IceWolf910.jpg
  cat = loadImage('cat-head.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawInstructions();
}

function drawInstructions() {
  fill(0);
  textFont('Myriad Pro, Arial, sans-serif');
  textSize(20);
  textAlign('center');
  text('Click to add a kitty', width / 2, height - 50);
}

function draw() {
  if (mouseIsPressed) {
    image(cat, mouseX - cat.width / 2, mouseY - cat.height / 2)
  }
}
