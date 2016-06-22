'use strict'

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMP = 10;
};

Thermostat.prototype = {
  increase: function() {
    this.temperature += 1;
  },
  
  decrease: function() {
    if (this.atLimit()) {
      throw new Error('Can\'t decrease below 10 degrees')
    }
    this.temperature -= 1;
  },

  atLimit: function() {
    return ((this.temperature) <= this.MINIMUM_TEMP);
  }
};