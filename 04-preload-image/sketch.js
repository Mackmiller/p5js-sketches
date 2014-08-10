var cat;

function preload() {
	// original source: http://fc01.deviantart.net/fs71/i/2010/181/e/a/Cat_Sketch_by_IceWolf910.jpg
	cat = loadImage('cat-head.jpg')
}

function setup() {
	createCanvas(displayWidth, displayHeight)
}

function draw() {
	if (mouseIsPressed) {
		image(cat, mouseX, mouseY)
	}
}
