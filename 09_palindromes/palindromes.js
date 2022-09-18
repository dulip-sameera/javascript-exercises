const palindromes = function (word) {
  const punctuationSymbols = [
    ".",
    "?",
    "!",
    ",",
    ":",
    ";",
    "-",
    "[",
    "]",
    "{",
    "}",
    "(",
    ")",
    "'",
    '"',
    " ",
  ];

  let wordArray = word.split("");

  // removes all the punctuations and replace them with ""
  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 0; j < punctuationSymbols.length; j++) {
      if (wordArray[i] === punctuationSymbols[j]) {
        wordArray[i] = "";
      }
    }
  }
  // had to join the array to remove all "" replaced by the above code
  word = wordArray.join("").toLowerCase();
  reversedWord = wordArray.reverse().join("").toLowerCase();

  if (word != reversedWord) {
    return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
