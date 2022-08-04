const sumAll = function (startValue, endValue) {
  let total = 0;

  if (
    typeof startValue !== "number" ||
    typeof endValue !== "number" ||
    startValue < 0 ||
    endValue < 0
  ) {
    return "ERROR";
  }

  let start = startValue > endValue ? endValue : startValue;
  let end = startValue > endValue ? startValue : endValue;

  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
