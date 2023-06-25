
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

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = +pages;
  this.isRead = isRead;
  this.info = function () {
    return `${title} , ${author}, ${pages}, ${isRead}`;
  };

  //function that creates a container with the particular elements that are needed to store a form
  this.createBP(id) = function () {
    //element that wraps
    let div = document.createElement("div");
    div.classList.add(id)
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
function hideForm() {
  formContainer.style.display = "none";
}
function removeBook() {
  booksAdded--;
  myLibrary.pop();
}

function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let isRead = document.getElementById("isRead");
  booksAdded++;
  myLibrary.push(
    (window["book" + booksAdded] = new Book(
      title.value,
      author.value,
      pages.value,
      isRead.checked
    ))
  );
  myLibrary[booksAdded - 1].createBP();
  title.value = "";
  author.value = "";
  pages.value = "";
  isRead.checked = false;
  hideForm();
}
