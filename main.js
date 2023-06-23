// const bookOne = new Book("Bab", "Someone", 24, true);
// console.log(bookOne.info());
const bookOne = new Book("Bab", "Someone", 24, true);

let booksAdded = 0;
let myLibrary = [bookOne];

const bookHolder = document.getElementById("books");
const addBookBtn = document.getElementById("add");
createBP(bookOne);

// bookHolder.innerHTML = "";
addBookBtn.addEventListener("click", addBookToLibrary);

function createBP(book) {
  //element that wraps
  let div = document.createElement("div");
  //child elements
  let bookName = document.createElement("p");
  bookName.innerText = book.title;
  let bookAuthor = document.createElement("p");
  bookAuthor.innerText = book.author;
  let numberOfPages = document.createElement("p");
  numberOfPages.innerText = book.pages;
  let isBookRead = book.isRead;
  let BookRead = document.createElement("p");
  if (isBookRead == true) {
    BookRead.innerText = "Read";
  } else {
    BookRead.innerText = "Not read";
  }
  let rmBtn = document.createElement("button");
  rmBtn.innerText = "delete";

  bookHolder.appendChild(div);
  div.appendChild(bookName);
  div.appendChild(bookAuthor);
  div.appendChild(numberOfPages);
  div.appendChild(BookRead);
  div.appendChild(rmBtn);
}

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
