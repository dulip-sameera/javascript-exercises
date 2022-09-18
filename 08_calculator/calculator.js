const add = function (a = 0, b = 0) {
  return a + b;
};

const subtract = function (a = 0, b = 0) {
  return a - b;
};

const sum = function (numArray = []) {
  let tot = 0;
  numArray.forEach(function (value) {
    tot += value;
  });
  return tot;
};

const multiply = function (numArray = []) {
  let tot = 1;
  numArray.forEach(function (value) {
    tot *= value;
  });
  return tot;
};
const power = function (number, power) {
  return number ** power;
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
