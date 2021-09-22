function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  const array = [];
  const allGenres = books.map((book) => book.genre);
  const uniqueGenres = [...new Set(allGenres)];
  uniqueGenres.forEach((genre) => {
    let counter = 0;
    allGenres.forEach((element) => {if (element === genre) {
      counter++
    }})
    array.push({name: genre, count: counter})
  })
  return array.sort((elementA, elementB) => elementB.count - elementA.count).splice(0,5);
}

function getMostPopularBooks(books) {
  const array = [];
  const borrowsElement = books.map((book) => book.borrows)
  books.forEach((book) => {
    let counter = 0;
    let borrowed = book.borrows
  borrowsElement.forEach((element) => {
    counter = borrowed.length
  })
  array.push({name: book.title, count: counter})
  })
  return array.sort((elementA, elementB) => elementB.count - elementA.count).splice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const array = []
  authors.forEach((auth) => {
    counter = 0;
    books.forEach((book) => {
      let borrowed = book.borrows
      if (book.authorId === auth.id) {
      counter = borrowed.length
    }})
    array.push({name: `${auth.name.first} ${auth.name.last}`, count: counter})
  })
  return array.sort((elementA, elementB) => elementB.count - elementA.count).splice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
