var x = 0

function setup() {
	createCanvas(640, 480)
}

function draw() {
	ellipse(x, height / 2, 20, 20)
	x = x + 1
}
