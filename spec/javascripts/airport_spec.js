describe("airport", function() {
  it ('can land a plane', function() {
    airport = new Airport();
    var plane = 'I am a plane';
    airport.land(plane);
    expect(airport.planes()[0]).toEqual(plane);
  });

  it ('Plane should take off', function(){
    airport = new Airport();
    var plane = 'Plane1';
    airport.land(plane);
    airport.takeoff(plane); 
    expect(airport.planes()[0]).toEqual(undefined);
  });
});
