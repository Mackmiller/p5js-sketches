var moonImg;
var system;

function preload() {
  moonImg = loadImage('moon.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  system = new System();

	var moon = new Moon(new p5.Vector(width / 2, height / 2), moonImg);
	system.addBody(moon);

	var ship = new Ship(
			new p5.Vector(width / 4, height / 2),
			new p5.Vector(0, -2)
		);
	system.addBody(ship);
}

function draw() {
  background(0);
  system.run();
}
