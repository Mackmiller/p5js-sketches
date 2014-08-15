function Body() {
	this.location = new p5.Vector();
	this.velocity = new p5.Vector();
	this.acceleration = new p5.Vector();
	this.mass = 10;
	this.radius = 10;
  this.G = 6.67e-3;

	switch (arguments.length) {
		case 4:
			this.mass = arguments[2];
			this.radius = arguments[3];
		case 2:
			this.velocity = arguments[1];
		case 1:
			this.location = arguments[0];
	}
}

Body.prototype.applyForces = function(bodies) {
	// always start from scratch
	this.acceleration.mult(0);
	this.applyGravity(bodies);
}

Body.prototype.applyGravity = function(bodies) {
  for (var i = 0; i < bodies.length; i++) {
    var other = bodies[i];
    var toward = p5.Vector.sub(other.location, this.location);
    var r = toward.mag();
		if (r > 0) {
			this.acceleration.add(toward.setMag(this.G * other.mass / (r * r)));
		}
  }
}

Body.prototype.applyMovement = function(bodies) {
	this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
	//this.wrapAround();
}

Body.prototype.wrapAround = function() {
  if (this.location.x < 0) {
    this.location.x += width;
  } else if (this.location.x >= width) {
    this.location.x -= width;
  }

  if (this.location.y < 0) {
    this.location.y += height;
  } else if (this.location.y >= height) {
    this.location.y -= height;
  }
}


Body.prototype.render = function() {
  ellipse(this.location.x, this.location.y, 2 * this.radius, 2 * this.radius);
}
