const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.isArray) return 0;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    product = product * array[i];
  }
  return product;
};

const power = function(a, b) {
  let product = 1;
  for (let i = 0; i < b; i++) {
    product = product * a;
  }
  return product;
};

const factorial = function(a) {
	// multiplies itself after decrement
  let product = 1;
  for (let i = a; i > 0; i--) {
    product = product * i;
  }
  return product;
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
