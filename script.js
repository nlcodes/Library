
const myLibrary = [{ title: "Moby Dick", author: "Herman Melville", pages: 625, read: false }];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // Add logic here to add a new book to the library
}

function removeBook(index) {
  myLibrary.splice(index, 1); // Remove the book from the array
  displayBooks(); // Redisplay the updated library
}

function displayBooks() {
  const books = document.getElementById("books");
  books.innerHTML = ''; // Clear existing content before rendering

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const list = document.createElement("ul");
    const title = document.createElement("li");
    const author = document.createElement("li");
    const pages = document.createElement("li");
    const checkLi = document.createElement("li");
    const removeLi = document.createElement("li");

    const readBoolCheck = document.createElement("input");
    const removeButton = document.createElement("button");

    removeButton.classList.add("btn", "btn-danger", "book-btn");
    readBoolCheck.type = "checkbox";
    readBoolCheck.classList.add("checkbox");

    // Add event listener with an anonymous function; anon function lets you delay the function being executed until the event happens
    removeButton.addEventListener("click", () => removeBook(index));

    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author;
    pages.textContent = "Pages: " + book.pages.toString();
    checkLi.textContent = "Read: ";
    removeButton.textContent = "X";

    const modal = document.querySelector("#modal");
    const openModal = document.querySelector("#add-book-btn");

    openModal.addEventListener("click", () => {
      modal.show();
    })

    books.appendChild(bookCard);
    bookCard.appendChild(list);
    list.appendChild(title);
    list.appendChild(author);
    list.appendChild(pages);
    list.appendChild(checkLi);
    list.appendChild(removeLi);
    checkLi.appendChild(readBoolCheck);
    removeLi.appendChild(removeButton);
  });
}

// Initially display the books
displayBooks();
