const convertToCelsius = function(fahrenheit) {
  let converted = (fahrenheit - 32) * (5 / 9);
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let converted = celsius * 1.8 + 32;
  return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
