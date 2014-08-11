var sigma = 10;
var rho = 28;
var beta = 8 / 3;
var s = 80;

var x, y, z;

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  x = random(3);
  y = random(3);
  z = random(3);
}

var t = 0;
var dt = 0.01;

function to_x(v) {
  // NOTE: arbitrary constant here just to center things
  return windowWidth * (0.50 + x / s);
}

function to_z(v) {
  // NOTE: arbitrary constant here just to center things
  return windowHeight * (10 + z) / s;
}

function draw() {
  var dx = rho * (y - x);
  var dy = x * (rho - z) - y;
  var dz = x * y - beta * z;

  x += dx * dt;
  y += dy * dt;
  z += dz * dt;

  stroke(0, 255, 0, 100);
  strokeWeight(2);
  point(to_x(x), to_z(z));
}
