function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
  this.info = function () {
    console.log(title + ",", author + ",", numberOfPages + ",", isRead);
    return;
  };
}

const bookOne = new Book("Bab", "Someone", 24, true);
bookOne.info();
