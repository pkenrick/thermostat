$(document).ready(function() {
        
  var thermostat = new Thermostat();

  updateTemp();
  updatePowerSavingStatus();
  
  $('#temperature-increase').click(function(){
    thermostat.increase();
    updateTemp();
  });

  $('#temperature-decrease').click(function(){
    thermostat.decrease();
    updateTemp();        
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    updateTemp();        
    });

  $('#power-saving-switch').click(function(){
    thermostat.powerSavingSwitch();
    updatePowerSavingStatus();
  });

  function updatePowerSavingStatus(){
    if (thermostat.powerSavingMode) {
      $('#power-saving-mode').text('ON');
    } else {
      $('#power-saving-mode').text('OFF')
    };
  };

  function updateTemp(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.displayUsage());
  };

});