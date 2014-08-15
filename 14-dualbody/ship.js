function Ship(location) {
  this.location = location;
  this.heading = - Math.PI / 2;
  this.velocity = new p5.Vector();
  this.acceleration = new p5.Vector();

  this.rotationPerTick = 0.075;
  this.forcePerTick = 0.05;
  this.r = 4;
	this.thrust = false;
}

Ship.prototype = new Body();

Ship.prototype.applyForces = function(bodies) {
	this.thrust = false;
  this.acceleration.mult(0);
	this.applyGravity(bodies);

  if (isKeyPressed) {
    if (keyCode === 37) {
      this.heading -= this.rotationPerTick;
    } else if (keyCode == 39) {
      this.heading += this.rotationPerTick;
    } else if (keyCode == 38) {
      this.acceleration = new p5.Vector(
          Math.cos(this.heading),
          Math.sin(this.heading)
        ).setMag(this.forcePerTick);
			this.thrust = true;
    }
  }
}

Ship.prototype.render = function() {
  fill(200, 100);
  stroke(255);
  push();
  translate(this.location.x, this.location.y);
  rotate(this.heading + Math.PI / 2);
  beginShape(TRIANGLES);
  vertex(0, -this.r * 2);
  vertex(-this.r, this.r * 2);
  vertex(this.r, this.r * 2);
  vertex(0, -this.r * 2);
  endShape();
  if (this.thrust) {
    stroke(255, 255, 0);
    eps = 2;
    line(0, this.r * 3, 0, this.r * 7);
    line(eps, this.r * 3, 2 * eps, this.r * 7);
    line(-eps, this.r * 3, -2 * eps, this.r * 7);
  }
  pop();
}
