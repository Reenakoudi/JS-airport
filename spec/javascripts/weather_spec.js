describe ("weather", function () {
  it ('reports stormy weather', function () {
    weather = new Weather();
    spyOn(Math, 'random').and.returnValue(0.81);
    expect(weather.report()).toEqual('Stormy');
  });
  it ('reports fine weather', function () {
    weather = new Weather();
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(weather.report()).toEqual('Fine');
  });
});
