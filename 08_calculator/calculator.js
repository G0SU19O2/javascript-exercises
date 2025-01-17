const add = function(first, second) {
	return first + second
};

const subtract = function(first, second) {
  return first - second
};

const sum = function(array) {
  if (array.length === 0) {
    return 0
  }
  return array.reduce((a, b) => a + b);
};

const multiply = function(array) {
  if (array.length === 0) {
    return 0
  }
  return array.reduce((a, b) => a * b);
};

const power = function(num, exp) {
	return Math.pow(num, exp)
};

const factorial = function(num) {
  if (num === 0) {
    return 1
  }
  return num * factorial(num - 1)
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
