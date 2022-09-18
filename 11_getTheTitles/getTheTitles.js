const getTheTitles = function (books) {
  let bookTitles = books.reduce(function (titles, book) {
    titles.push(book.title);
    return titles;
  }, []);

  return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
