let myLibrary = [];

function triggerModal() {
  const modal = document.querySelector('.js-modal');
  modal.classList.toggle('hide');
}

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.changeReadStatus = function() {
    if (read) {
      this.read = false;
    } else {
      this.read = true;
    }
  }
}

function addBookToLibrary(e) {
  // prevent default form submission
  e.preventDefault();

  // get and validate form submission data
  const titleInput = document.querySelector('.js-title');
  const authorInput = document.querySelector('.js-author');
  const pagesInput = document.querySelector('.js-pages');
  const readStatusInput = document.querySelector('.js-status');
  let readStatus = false;
  const errorText = document.querySelector('.js-error');

  if (titleInput.value === '' ||
      authorInput.value === '' || 
      pagesInput.value <= 0
  ) {
    // check book values exist, throw error if no value
    errorText.textContent =  'Please make sure entries are valid';
    return
  } else {
    errorText.textContent = '';
  }

  // get read status value 
  if (readStatusInput.checked) {
    readStatus = true;
  }

  // if data is valid, create new book (object)
  const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readStatus);

  // add new book to my library
  myLibrary.push(newBook);

  // display updated library
  displayLibrary(myLibrary);

  // clear inputs 
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readStatusInput.checked = false;

  // close modal
  triggerModal();
}


function displayLibrary(booksArr) {
  // loop through library
  booksArr.forEach(book => {
    console.log(book.title);
    // create clone of html book template

    // set title, author, pages, and read status

    // append book element
  })
}


// modal variables
const addBookBtn = document.querySelector('.js-add-book');
const modalBg = document.querySelector('.js-modal-bg');
const modalCloseIcon = document.querySelector('.js-close-icon');

// trigger modal events on click
addBookBtn.addEventListener('click', triggerModal);
modalBg.addEventListener('click', triggerModal);
modalCloseIcon.addEventListener('click', triggerModal);

// submit modal form to create new book card
const addBookForm = document.querySelector('.js-form');
addBookForm.addEventListener('submit', addBookToLibrary);