const vehicle = require('./roverObject');

test('vehicle has name: rover property', ()=>{
    expect(vehicle.name).toBe('rover');
});