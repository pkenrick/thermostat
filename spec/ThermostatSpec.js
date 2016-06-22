'use strict';

describe('Thermostat', function(){
  
  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat is created with a temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature', function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature', function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10', function(){
    for(var i = 0; i < 10; i++) {
      thermostat.decrease();
    };
    expect(function(){thermostat.decrease()}).toThrowError('Can\'t decrease below 10 degrees');
  });

});
