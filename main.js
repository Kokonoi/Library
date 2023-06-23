// const bookOne = new Book("Bab", "Someone", 24, true);
// console.log(bookOne.info());
const bookOne = new Book("Bab", "Someone", 24, true);

let booksAdded = 0;
let myLibrary = [bookOne];

const bookHolder = document.getElementById("books");
const addBookBtn = document.getElementById("add");

// bookHolder.innerHTML = "";
addBookBtn.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = +pages;
  this.isRead = isRead;
  this.info = function () {
    return `${title} , ${author}, ${pages}, ${isRead}`;
  };
}

function addBookToLibrary() {
  let title = prompt("What's the name of the book?");
  let author = prompt("What's the name of an author of the book?");
  let pages = prompt("What's the number of pages");
  let isRead = prompt("Did you complete that book?");
  booksAdded++;
  myLibrary.push(
    (window["book" + booksAdded] = new Book(title, author, pages, isRead))
  );
}
