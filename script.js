const myLibrary = [{title: "Moby Dick", author: "Herman Melville", pages: 625, read: false}];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  
}

function removeBook(index) {
  console.log("success")
  myLibrary.splice(index, 1);
  displayBooks();
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
    const checkLi = document.createElement("li");
    const removeLi = document.createElement("li");

    const readBoolCheck = document.createElement("input");
    const removeButton = document.createElement("button");
    
    removeButton.classList.add("btn");
    removeButton.classList.add("btn-danger");
    removeButton.classList.add("book-btn");
    readBoolCheck.type = "checkbox";
    readBoolCheck.classList.add("checkbox");

    removeButton.addEventListener("click", removeBook(index))
    book.index = 

    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author;
    pages.textContent = "Pages: " + book.pages.toString();
    checkLi.textContent = "Read: ";
    removeButton.textContent = "X";
    
    books.appendChild(bookCard);
    bookCard.appendChild(list);
    list.appendChild(title);
    list.appendChild(author);
    list.appendChild(pages);
    list.appendChild(checkLi);
    list.appendChild(removeLi);
    checkLi.appendChild(readBoolCheck);
    removeLi.appendChild(removeButton);
  }
}


displayBooks();


