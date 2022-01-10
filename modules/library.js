
import {bookAuthor,bookTitle, empty, input, data, bookExist} from './variable.js';

class Library {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    book = [];
  
    addNewBook() {
      if (bookTitle.value && bookAuthor.value) {
        for(let j = 0;j< x.book.length; j += 1) {
          if (bookTitle.value === x.book[j].title && bookAuthor.value === x.book[j].author) {
            x.checkBookInData();
            return;
          }
        }
        empty.style.display = ('none');
        const newBook = new Library(bookTitle.value, bookAuthor.value);
        x.book.push(newBook);
        localStorage.setItem('list', JSON.stringify(x.book));
        const section = document.querySelector('.bookSection');
        const div = document.createElement('div');
        div.className = ('bookList');
        div.dataset.id = (x.book.length - 1);
        section.appendChild(div);
        const bookInfo = document.createElement('p');
        bookInfo.textContent = (`"${bookTitle.value}" by ${bookAuthor.value}`);
        bookInfo.className = ('bookInfo');
        div.appendChild(bookInfo);
        const removeButton = document.createElement('button');
        removeButton.textContent = ('Remove');
        removeButton.className = ('removee');
        removeButton.id = (x.book.length - 1);
        div.appendChild(removeButton);
        const removeBtn = document.querySelectorAll('.removee');
        removeBtn.forEach((item) => item.addEventListener('click', x.removeBook));
        x.clearFields();
        x.showSuccessMessage();
      }
    }
  
    checkBookInData() {
      bookExist.style.display = ('block');
      x.clearFields();
      x.removeMessageOnInput();
    }
  
    clearFields() {
      bookTitle.value = ('');
      bookAuthor.value = ('');
    }
  
    showSuccessMessage() {
      const bookAdded = document.querySelector('.bookAdded');
      bookAdded.style.display = ('block');
      x.removeMessageOnInput();
    }
  
    removeMessageOnInput() {
      const bookAdded = document.querySelector('.bookAdded');
      input.forEach((item) => {
        item.addEventListener('focus', () => {
          bookAdded.style.display = ('none');
          bookExist.style.display = ('none');
        });
      });
    }
  
    removeBook(ev) {
      const elementToRemove = document.querySelectorAll('[data-id]');
      elementToRemove.forEach((item) => {
        if (item.dataset.id === ev.target.id) {
          item.style.display = ('none');
        }
      });
      for (let i = 0; i < x.book.length; i += 1) {
        if (i.toString() === ev.target.id) {
          x.book.splice(i, 1);
          localStorage.setItem('list', JSON.stringify(x.book));
        }
      }
    }
  
    init() {
      for (let i = 0; i < x.book.length; i += 1) {
        const section = document.querySelector('.bookSection');
        const div = document.createElement('div');
        div.className = ('bookList');
        div.dataset.id = (i);
        const bookInfo = document.createElement('p');
        bookInfo.textContent = (`"${x.book[i].title}" by ${x.book[i].author}`);
        bookInfo.className = ('bookInfo');
        div.appendChild(bookInfo);
        const removeButton = document.createElement('button');
        removeButton.textContent = ('Remove');
        removeButton.className = ('removee');
        removeButton.id = (i);
        div.appendChild(removeButton);
        section.appendChild(div);
        const removeBtn = document.querySelectorAll('.removee');
        removeBtn.forEach((item) => item.addEventListener('click', x.removeBook));
      }
    }
  
    onloadFunction() {
      const empty = document.querySelector('.emptyCollection');
      if (data[0] !== undefined) {
        empty.style.display = ('none');
        x.book = data;
        x.init();
      } else {
        empty.style.display = ('flex');
      }
    }
  }
  
  let x = new Library();
  export {x as default};