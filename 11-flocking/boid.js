function Boid(x, y) {
  this.location = createVector(x, y);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.acceleration = createVector();
  this.r = 2.0;
  this.maxForce = 0.03;
  this.maxSpeed = 3;
  this.neighbourDist = 50;
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}

Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids);
  var ali = this.align(boids);
  var coh = this.cohesion(boids);

  // Arbitrarily weight these forces
  sep.mult(1.5);
  ali.mult(1.0);
  coh.mult(1.0);

  // Add the force vectors to acceleration
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration).limit(this.maxSpeed);

  // Update location
  this.location.add(this.velocity);

  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);
}

Boid.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target, this.location);

  desired.setMag(this.maxSpeed);

  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired, this.velocity).limit(this.maxForce);
  return steer;
}

/**
 * Render this boid as a triangle.
 */
Boid.prototype.render = function() {
  var theta = this.velocity.heading();

  fill(200, 100);
  stroke(255);
  push();
  translate(this.location.x, this.location.y);
  rotate(theta + Math.PI / 2);
  beginShape(TRIANGLES);
  vertex(0, -this.r * 2);
  vertex(-this.r, this.r * 2);
  vertex(this.r, this.r * 2);
  vertex(0, -this.r * 2);
  endShape();
  pop();
}

/**
 * Wrap-around location to pane.
 */
Boid.prototype.borders = function() {
  if (this.location.x < -this.r) {
    this.location.x = width + this.r;
  }
  if (this.location.y < -this.r) {
    this.location.y = height + this.r;
  }
  if (this.location.x > width + this.r) {
    this.location.x = -this.r;
  }
  if (this.location.y > height + this.r) {
    this.location.y = -this.r;
  }
}

Boid.prototype.separate = function(boids) {
  var desiredSeparation = 25;
  var steer = createVector();
  var count = 0;

  // For every boid in the system, check if it's too close
  for (var i = 0; i < boids.length; i++) {
    var other = boids[i];
    var d = this.location.dist(other.location);

    // If the distance is greater than 0 and less than an arbitrary amount
    // (0 when you are yourself)
    if ((d > 0) && (d < desiredSeparation)) {
      // Calculate vector pointing away from neighbor
      var diff = p5.Vector.sub(this.location, other.location);
      diff.normalize();
      diff.div(d);        // Weight by distance
      steer.add(diff);
      count++;            // Keep track of how many
    }
  }
  // Average -- divide by how many
  if (count > 0) {
    steer.div(count);
  }

  // As long as the vector is greater than 0
  if (steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    steer.setMag(this.maxSpeed);
    steer.sub(this.velocity);
    steer.limit(this.maxForce);
  }
  return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {
  var sum = createVector();
  var count = 0;

  for (var i = 0; i < boids.length; i++) {
    var other = boids[i];
    var d = this.location.dist(other.location);
    if ((d > 0) && (d < this.neighbourDist)) {
      sum.add(other.velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);

    // Implement Reynolds: Steering = Desired - Velocity
    sum.setMag(this.maxSpeed);
    var steer = p5.Vector.sub(sum, this.velocity);
    steer.limit(this.maxForce);
    return steer;
  }
  else {
    return createVector();
  }
}

/**
 * Cohesion: for the average location (i.e. center) of all nearby boids,
 * calculate steering vector towards that location
 */
Boid.prototype.cohesion = function(boids) {
  var sum = createVector();

  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var other = boids[i];
    var d = this.location.dist(other.location);
    if ((d > 0) && (d < this.neighbourDist)) {
      sum.add(other.location); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // Steer towards the location
  }
  else {
    return createVector();
  }
}
