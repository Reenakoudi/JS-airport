function Airport () {
  this._planes = [];
}
Airport.prototype.land = function (plane) {
  this._planes.push(plane);
}
Airport.prototype.planes = function () {
  return this._planes;
}

Airport.prototype.takeoff = function(plane) {
  var i = this._planes.indexOf(plane);
  return this._planes.splice(i,1);

}

function Weather () {
}

Weather.prototype.report = function () {
  return Math.random() > 0.8 ? 'Stormy' : 'Fine' ;
}
