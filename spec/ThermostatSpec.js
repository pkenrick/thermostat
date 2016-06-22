'use strict';

describe('Thermostat', function(){
  var thermostat;
  thermostat = new Thermostat();

  it('thermostat is created with a temperature of 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature', function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });
});
