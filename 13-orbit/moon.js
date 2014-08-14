function Moon(location, img) {
  this.location = location;
  this.img = img;
  this.radius = img.width / 2;
  this.mass = 200000;
}

Moon.prototype = new Body();

Moon.prototype.render = function() {
  var x = this.location.x - this.img.width / 2;
  var y = this.location.y - this.img.height / 2;
  image(this.img, x, y);
}
