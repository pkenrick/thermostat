$(document).ready(function() {
 
 var thermostat = new Thermostat();

 updateTemp();

 $("#temperature-up").click(function () {
   thermostat.up();
   updateTemp();
 });

 $("#temperature-down").click(function () {
   thermostat.down();
   updateTemp();
 });

 $("#temperature-reset").click(function () {
   thermostat.reset();
   updateTemp();
 });

 $("#powersaving-on").click(function () {
   $("#power-saving-status").text("on");
   thermostat.switchPowerSavingModeOn();
 });

 $("#powersaving-off").click(function () {
   $("#power-saving-status").text("off");
   thermostat.switchPowerSavingModeOff();
 });

 $("#current-city").change(function () {
   var city = $("#current-city").val();
   displayWeather(city);
  });

 function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=1ba251876150a3d6b1093f2689309918';
  var units = '&units=metric';
  $.get(url + token + units, function(data){
    $("#outside-weather").text(data.main.temp);
  });
 };

 function updateTemp(){
  $("#temperature").attr('class', thermostat.energyUsage());
  $("#temperature").text(thermostat.temperature);
 };

});

