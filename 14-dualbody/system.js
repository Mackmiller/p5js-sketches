function System() {
  this.bodies = [];
}

System.prototype.addBody = function(body) {
  this.bodies.push(body);
}

System.prototype.run = function() {
	this.applyForces();
	this.applyMovement();
	this.collisions();
	this.render();
}

System.prototype.applyForces = function() {
	for (var i = 0; i < this.bodies.length; i++) {
		var body = this.bodies[i];
		body.applyForces(this.bodies);
	}
}

System.prototype.applyMovement = function() {
  for (var i = 0; i < this.bodies.length; i++) {
    var body = this.bodies[i];
    body.applyMovement();
  }
}

System.prototype.render = function() {
  for (var i = 0; i < this.bodies.length; i++) {
    var body = this.bodies[i];
    body.render();
  }
}

System.prototype.collisions = function() {
	// order by mass decreasing
	this.bodies.sort(function (a, b) {
		return b.mass - a.mass;
	});

	// queue the smaller bodies in any collision for removal
	var toRemove = [];
  for (var i = 0; i < this.bodies.length - 1; i++) {
		for (var j = i + 1; j < this.bodies.length; j++) {
			var bigger = this.bodies[i];
			var smaller = this.bodies[j];
			var minDist = bigger.radius + smaller.radius;
			if (bigger.location.dist(smaller.location) < minDist) {
				// collision!
				toRemove.push(j);
			}
		}
  }

	toRemove.sort().reverse();
	for (var i = 0; i < toRemove.length; i++) {
		this.bodies.splice(toRemove[i], 1);
	}
}
