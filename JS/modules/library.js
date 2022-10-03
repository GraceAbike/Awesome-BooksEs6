const libraryBooksEl = document.querySelector('.list-books');
const addElBtn = document.querySelector('.btn-add');
const form = document.querySelector('form');
const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
const alertMessageEl = document.querySelector('.alertMessage');

const bookList = JSON.parse(localStorage.getItem('bookList')) || [];

export default class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    addElBtn.addEventListener('click', () => {
      const title = titleEl.value;
      const author = authorEl.value;
      if (title && author) {
        const newBook = {
          title,
          author,
        };
        bookList.push(newBook);
        localStorage.setItem('bookList', JSON.stringify(bookList));
        this.renderBooks();
        form.reset();
        alertMessageEl.innerHTML = 'Book added successfully, <br> Check list.';
        alertMessageEl.style.color = 'darkblue';
      } else {
        alertMessageEl.innerHTML = 'Input something';
        alertMessageEl.style.color = 'red';
      }
      setTimeout(() => {
        alertMessageEl.innerHTML = '';
      }, 1500);
    });
  }

  renderBooks() {
    if (!bookList.length) {
      libraryBooksEl.innerHTML = 'No books added';
    } else {
      let markup = '';
      bookList.forEach((elem, index) => {
        markup += `<div class="library-book"
        <p class="book-title">"${elem.title}"</p> <span> by </span>
        <p class="book-author">${elem.author}</p>    
        <button type="button" class="btn-rmv" id=${index}>Remove</button>
    </div>`;
      });
      libraryBooksEl.innerHTML = markup;
    }

    const removeBook = () => {
      const removeBtnsEl = [...document.getElementsByClassName('btn-rmv')];
      removeBtnsEl.forEach((item) => {
        item.addEventListener('click', (e) => {
          bookList.splice(e.target.id, 1);
          localStorage.setItem('bookList', JSON.stringify(bookList));
          this.renderBooks();
        });
      });
    };
    removeBook();
  }
}