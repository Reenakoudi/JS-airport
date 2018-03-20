describe("airport", function() {


  it ('Plane should take off in Fine weather', function(){
    airport = new Airport(Weather);
    spyOn(Math, 'random').and.returnValue(0.5);
    var plane = 'Plane1';
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes()[0]).toEqual(undefined);
  });

  it ('Plane should take off in Stormy weather', function(){
    airport = new Airport(Weather);
    // spyOn(Math, 'random').and.returnValue(0.5);
    var plane = 'Plane1';
    // airport.land(plane);
    spyOn(Math, 'random').and.returnValue(0.81);
    // airport.takeoff(plane);
    expect(function(){airport.takeoff(plane)}).toThrowError('Weather is Stormy');
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

  it('Does not land a plane when the airport is full',function(){
    airport = new Airport(Weather);
    spyOn(Math, 'random').and.returnValue(0.5);
    var plane = 'I am a plane';
    for (let i = 1; i <= 20; i++) {
      airport.land(plane)
    }
    expect(function(){airport.land(plane)}).toThrowError('Airport is Full');
  });
});
