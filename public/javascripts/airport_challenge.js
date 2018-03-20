function Airport(Weather) {
  this._weather = new Weather();
  this._planes = [];
}
Airport.prototype.land = function (plane) {
  if (this._weather.report() === 'Stormy') { throw Error("Weather is Stormy") };
  if (this._planes.length >= 20) { throw Error("Airport is Full") };
  this._planes.push(plane);
}
Airport.prototype.report = function () {
  return this._weather.report();
}


Airport.prototype.planes = function () {
  return this._planes;
}

Airport.prototype.takeoff = function(plane) {
  if (this._weather.report() === "Stormy") { throw Error("Weather is Stormy") };
    var i = this._planes.indexOf(plane);
    return this._planes.splice(i,1);
}

function Weather () {
}

Weather.prototype.report = function () {
  return Math.random() > 0.8 ? 'Stormy' : 'Fine' ;
}
