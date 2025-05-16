const add = function(x , y) {
  return x + y;
	
};

const subtract = function(x, y) {
  return x - y;
	
};

const sum = function(array) {
  summed = array.reduce((accum, numb) => accum + numb,0);
  return summed;
};

const multiply = function(array) {
  const mult = array.reduce((accum, item) => accum * item, 1);
  return mult;
};

const power = function(x, y) {
  return x ** y;
	
};

const factorial = function(x) {
  if (x == 0 || x == 1)
  {
    return 1;
  } else {
    return (x * factorial(x - 1));
  }
	
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
