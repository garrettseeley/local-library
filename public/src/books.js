function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => !book.borrows[0].returned);
  const checkedIn = books.filter((book) => book.borrows[0].returned);
  return [checkedOut, checkedIn];
}

function getBorrowersForBook(book, accounts) {
  const array = [];
  const borrowsIds = book["borrows"].map(({ returned, id }) => {
    let acctId = accounts.map((user) => {
      if (user.id === id) {
        user.returned = returned;
        array.push(user);
      }
    });
  });
  return array.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
