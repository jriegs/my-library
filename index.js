let myLibrary = ['Book1', 'Book2', 'Book3'];

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
}


function displayLibrary(booksArr) {
  for (book in booksArr) {
    console.log(booksArr[book]);
  }
}

displayLibrary(myLibrary);


function triggerModal() {
  const modal = document.querySelector('.js-modal');
  modal.classList.toggle('hide');
}


/* Global */


const addBookBtn = document.querySelector('.js-add-book');
const modalBg = document.querySelector('.js-modal-bg');
const modalCloseIcon = document.querySelector('.js-close-icon');
  
addBookBtn.addEventListener('click', triggerModal);
modalBg.addEventListener('click', triggerModal);
modalCloseIcon.addEventListener('click', triggerModal);