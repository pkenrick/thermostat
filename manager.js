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

 function updateTemp(){
  $("#temperature").attr('class', thermostat.energyUsage());
  $("#temperature").text(thermostat.temperature); 
 };

});

