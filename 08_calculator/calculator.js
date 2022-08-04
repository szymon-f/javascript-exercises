const add = function(a,b ) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let sum = numbers.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum;
};

const multiply = function(numbers) {
  let mult = numbers.reduce((total, num) => {
    return total * num;
  }, 1);
  return mult;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  }
  let nums = [...Array(num + 1).keys()];
  nums.shift();
  return nums.reduce((total, num) => {
    return total * num;
  })
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
