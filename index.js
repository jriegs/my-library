let myLibrary = [];

function triggerModal() {
  const modal = document.querySelector('.js-modal');
  modal.classList.toggle('hide');
}

function Book(title, author, pages, readStatus) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = readStatus;

  this.changeReadStatus = function() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
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
  const bookTemplate = document.getElementById('bookTemplate');
  const tempTitle = bookTemplate.content.querySelector('.js-book-title');
  const tempAuthor = bookTemplate.content.querySelector('.js-book-author');
  const tempPages = bookTemplate.content.querySelector('.js-book-pages');
  const tempStatus = bookTemplate.content.querySelector('.js-book-status');

  // clear out old libary
  const booksContainer = document.querySelector('.js-books-container');
  booksContainer.innerHTML = '';
  
  // loop through library
  booksArr.forEach((book) => {
    console.log(book);
    // set title, author, pages, and read status
    tempTitle.textContent = book.title;
    tempAuthor.textContent = book.author;
    tempPages.textContent = book.pages;
    if (book.status) {
      tempStatus.textContent = 'Read';
    } else {
      tempStatus.textContent = 'Not read';
    }

    // create clone of html book template
    const newBookTemplate = bookTemplate.content.cloneNode(true);

    // append book element
    booksContainer.append(newBookTemplate);
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