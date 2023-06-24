// const bookOne = new Book("Bab", "Someone", 24, true);
// console.log(bookOne.info());
const bookOne = new Book("Bab", "Someone", 24, true);
const bookTwo = new Book("Sab", "Bomeone", 21, true);
const bookThree = new Book("Man", "Domeone", 22, false);

let booksAdded = 0;
let myLibrary = [bookOne, bookTwo, bookThree];

const bookHolder = document.getElementById("books");
const addBookBtn = document.getElementById("add");
const formContainer = document.querySelector(".form");
const submitBookBtn = document.getElementById("submitBook");

addBookBtn.addEventListener("click", displayForm);
submitBookBtn.addEventListener("click", addBookToLibrary);

myLibrary.forEach((book) => book.createBP());

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = +pages;
  this.isRead = isRead;
  this.info = function () {
    return `${title} , ${author}, ${pages}, ${isRead}`;
  };

  this.createBP = function () {
    //element that wraps
    let div = document.createElement("div");
    //child elements
    let bookName = document.createElement("p");
    bookName.innerText = title;
    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = author;
    let numberOfPages = document.createElement("p");
    numberOfPages.innerText = pages;
    let isBookRead = isRead;
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
  };
}

function displayForm() {
  formContainer.style.display = "block";
}

function addBookToLibrary(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let isRead = document.getElementById("isRead").value;
  booksAdded++;
  myLibrary.push(
    (window["book" + booksAdded] = new Book(title, author, pages, isRead))
  );
}
