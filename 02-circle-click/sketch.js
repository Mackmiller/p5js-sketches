function setup() {
	createCanvas(displayWidth, displayHeight)
}

function draw() {
	if (mouseIsPressed) {
		fill(0)
		ellipse(mouseX, mouseY, 40, 40)
	}
}
