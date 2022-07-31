const ftoc = function(temp) {
  let celcius = ((temp - 32)*5) / 9;
  return Math.round(celcius * 10) / 10;
};

const ctof = function(temp) {
  let fahrenheit = temp * 1.8 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
