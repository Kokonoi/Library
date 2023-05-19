function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
}

const bookOne = new Book("Bab", "Someone", 24, true);
console.log(bookOne);
