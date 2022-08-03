const repeatString = function (word, repeat) {
  let repeatedWord = "";

  if (repeat >= 0) {
    for (let i = 0; i < repeat; i++) {
      repeatedWord += word;
    }
  } else {
    repeatedWord = "ERROR";
  }

  return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
