'use strict'

function Thermostat(temperature){
  this.MINIMUM_TEMP = 10;
  this.DEFAULT_TEMP = 20;

  this.temperature = typeof temperature === 'undefined' ? this.DEFAULT_TEMP : temperature;
  this.powerSavingMode = true;
  this.maximumTemp = this.powerSavingMode ? 25 : 32;
};

Thermostat.prototype = {
  increase: function() {
      if (this._atMaximumLimit()) {
      throw new Error('Can\'t increase above ' + this.maximumTemp + ' degrees')
    }
    this.temperature += 1;
  },

  decrease: function() {
    if (this._atMinimumLimit()) {
      throw new Error('Can\'t decrease below ' + this.MINIMUM_TEMP + ' degrees')
    }
    this.temperature -= 1;
  },

  _atMinimumLimit: function() {
    return ((this.temperature) <= this.MINIMUM_TEMP);
  },

  _atMaximumLimit: function() {
    return ((this.temperature) >= this.maximumTemp);
  }
};
