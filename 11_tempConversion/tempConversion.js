const convertToCelsius = function(fahr) {
  let celsius = (fahr - 32) * (5/9);
  celsius = Number(celsius.toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(cels) {
  let fahr = (cels * 9/5) + 32;

  fahr = Number(fahr.toFixed(1));
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
