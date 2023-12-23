const myLibrary = [{title: "Moby Dick", author: "Herman Melville", pages: 625, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false},{title: "Moby Dick", author: "Herman Melville", pages: 625, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false},{title: "Moby Dick", author: "Herman Melville", pages: 625, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false}, {title: "Breath", author: "James Nestor", pages: 304, read: false},];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  
}

function displayBooks() {
  for (const book of myLibrary) {
    const books = document.getElementById("books");
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    const list = document.createElement("ul")
    const title = document.createElement("li");
    const author = document.createElement("li");
    const pages = document.createElement("li");
    const readBoolButton = document.createElement("button");
    const removeButton = document.createElement("button");
    readBoolButton.classList.add("btn-danger")
    readBoolButton.classList.add("btn")
    readBoolButton.classList.add("book-btn")


    readBoolButton.textContent = "Read"
    removeButton.textContent = "Remove"

    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author;
    pages.textContent = "Pages: " + book.pages.toString();
    
    books.appendChild(bookCard);
    bookCard.appendChild(list);
    list.appendChild(title);
    list.appendChild(author);
    list.appendChild(pages);
    bookCard.appendChild(readBoolButton);
  }
}

displayBooks();
