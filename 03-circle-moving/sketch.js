var t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 255, 0);
  strokeWeight(40);
}

function draw() {
  clear();
  background(0);

  var theta = t * Math.PI / 200;
  var x = Math.cos(theta);
  var y = Math.sin(theta);

  point((0.5 + 0.25 * x) * windowWidth,
        (0.5 + 0.25 * y) * windowHeight);

  t += 1;
}
