const myLibrary = [{name: "Moby Dick", author: "Herman Melville"}, {name: "Breath", author: "James Nestor"},{name: "Grokking Algorithms", author: "Aditya Bhargava"}];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  
}

function displayBooks() {
  for (const book of myLibrary) {
    const books = document.getElementById("books");
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const listItem = document.createElement("p");
    listItem.textContent = "Title: " + book.name;
    books.appendChild(bookCard);
    bookCard.appendChild(listItem);
  }
}

displayBooks();
