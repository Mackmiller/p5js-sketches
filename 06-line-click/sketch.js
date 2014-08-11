var first = true;
var x, y;

function setup() {
	createCanvas(displayWidth, displayHeight);
}

function draw() {
	if (mouseIsPressed) {
		stroke(0);
		strokeWeight(3);
		point(mouseX, mouseY);

		if (!first) {
			stroke(0);
			strokeWeight(1);
			line(x, y, mouseX, mouseY);
		}

		x = mouseX;
		y = mouseY;
		first = false;
	}
}
