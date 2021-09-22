function findAccountById(accounts, id) {
  for (const user of accounts) {
    if (user.id == id) {
      console.log(user)
      return user;
    }
  }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let tempId = account.id;
  let borrowCount = 0;
  books.reduce((acc, book) => {
    const accId = book["borrows"];
    accId.filter((userId) => (userId.id === tempId ? acc++ : false));
    borrowCount = acc;
    return acc;
  }, borrowCount);
  return borrowCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  let tempId = account.id;
  let borrowed = [];

  books.forEach((book) => {
    const accId = book["borrows"];
    accId.forEach((user) => {
      if (user.id === tempId && !user.returned) {
        borrowed.push(book);
        borrowed.forEach((borrow) => {
          borrow.author = authors.find((author) => author.id === book.authorId);
        });
      }
    });
  });
  return borrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
