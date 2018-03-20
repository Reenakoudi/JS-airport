function Airport(Weather) {
  this._weather = new Weather();
  this._planes = [];
}
Airport.prototype.land = function (plane) {
  if (this._weather.report === "Fine") {

  this._planes.push(plane);
}
else {
  const error = Error("Weather is Stormy");
}
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
