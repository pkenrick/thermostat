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

  $('#selected-city').change(function(){
    var city = $('#selected-city').val();
    displayWeather(city);
  });

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#outside-temp').text(data.main.temp);
    });
  };

  function updateTemp(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.displayUsage());
  };

});