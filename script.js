
const myLibrary = [{ title: "Moby Dick", author: "Herman Melville", pages: 625, read: false }];

// Store the form in a variable to collect data with submit event
const form = document.getElementById("book-data");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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

    // Set checkbox state with book's read property
    readBoolCheck.checked = book.read;

    // Event listener to update read property
    readBoolCheck.addEventListener("change", () => {
      book.read = readBoolCheck.checked;
    }); 

    // Add event listener with an anonymous function; anon function lets you delay the function being executed until the event happens
    removeButton.addEventListener("click", () => removeBook(index));

    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author;
    pages.textContent = "Pages: " + book.pages.toString();
    checkLi.textContent = "Read: ";
    removeButton.textContent = "X";

    const modal = document.querySelector("#modal");
    const openModal = document.querySelector("#add-book-btn");
    const closeModalBtns = document.querySelectorAll(".close-modal-button");

    openModal.addEventListener("click", () => {
      modal.showModal();
    })
    
    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        modal.close();

      });      
    });

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

// Listen for new book submissions and add to create new objects with constructor and add to myLibrary array
form.addEventListener("submit", function(event) {

  event.preventDefault();//prevent default form submission to server

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const newBook = new Book(title, author, pages);

  myLibrary.push(newBook);

  displayBooks();

  form.reset();
})
