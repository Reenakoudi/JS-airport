describe("airport", function() {
  it ('can land a plane', function() {
    airport = new Airport();
    var plane = 'I am a plane';
    airport.land(plane);
    expect(airport.planes()[0]).toEqual(plane);
  });
});
