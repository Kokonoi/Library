//dummy books
// const bookOne = new Book("Bab", "Someone", 24, true);
// const bookTwo = new Book("Sab", "Bomeone", 21, true);
// const bookThree = new Book("Man", "Domeone", 22, false);
// bookOne, bookTwo, bookThree

let booksAdded = 0;
let myLibrary = [];

const bookHolder = document.getElementById("books");
const addBookBtn = document.getElementById("add");
const formContainer = document.querySelector(".form");
const submitBookBtn = document.getElementById("submitBook");

addBookBtn.addEventListener("click", displayForm);
submitBookBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});

myLibrary.forEach((book) => book.createBP());

function Book(title, author, pages, isRead, identifier) {
  this.title = title;
  this.author = author;
  this.pages = +pages;
  this.isRead = isRead;
  this.identifier = identifier;

  //function that creates a container with the particular elements that are needed to store a form
  this.createBP = function (id) {
    //element that wraps
    let div = document.createElement("div");
    div.classList.add(id);
    //child elements
    let bookName = document.createElement("p");
    bookName.innerText = title;
    let bookAuthor = document.createElement("p");
    bookAuthor.innerText = author;
    let numberOfPages = document.createElement("p");
    numberOfPages.innerText = pages;
    //read button
    let BookRead = document.createElement("button");
    if (isRead == true) {
      BookRead.innerText = "Read";
    } else {
      BookRead.innerText = "Not read";
    }
    //
    BookRead.addEventListener("click", () => {
      this.isRead = !this.isRead;
      if (this.isRead) {
        BookRead.innerText = "Read";
      } else {
        BookRead.innerText = "Not read";
      }
    });
    //remove button
    let rmBtn = document.createElement("button");
    rmBtn.innerText = "delete";
    rmBtn.addEventListener("click", () => removeBook(identifier));
    //making html elements
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

function hideForm() {
  formContainer.style.display = "none";
}

function removeBook(identifier) {
  let div = document.querySelector("." + identifier);
  if (div) {
    div.remove();
    let index = myLibrary.findIndex((book) => book.identifier === identifier);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
  }
}

function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let isRead = document.getElementById("isRead");
  let identifier = "BookNum" + booksAdded;
  booksAdded++;
  myLibrary.push(
    (window["book" + booksAdded] = new Book(
      title.value,
      author.value,
      pages.value,
      isRead.checked,
      identifier
    ))
  );
  // array -> book with a corresponding identifier
  myLibrary.find((book) => book.identifier === identifier).createBP(identifier);
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = false;
  hideForm();
}
