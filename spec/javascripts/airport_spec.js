describe("airport", function() {


  it ('Plane should take off', function(){
    airport = new Airport(Weather);
    var plane = 'Plane1';
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes()[0]).toEqual(undefined);
  });

  it('can land a plane in fine weather',function(){
    airport = new Airport(Weather);
    spyOn(Math, 'random').and.returnValue(0.5);
    var plane = 'I am a plane';
    airport.land(plane);
    expect(airport.planes()[0]).toEqual(plane);
  });
  it('Does not land a plane in stormy weather',function(){
    airport = new Airport(Weather);
    spyOn(Math, 'random').and.returnValue(0.81);
    var plane = 'I am a plane';
    expect(function(){airport.land(plane)}).toThrowError('Weather is Stormy');
  });
});
