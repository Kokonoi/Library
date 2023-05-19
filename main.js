function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
  this.info = function () {
    return `${title} , ${author}, ${numberOfPages}, ${isRead}`;
  };
}

const bookOne = new Book("Bab", "Someone", 24, true);
console.log(bookOne.info());
