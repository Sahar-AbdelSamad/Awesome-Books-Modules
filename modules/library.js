import {
  bookAuthor, bookTitle, empty, input, data, bookExist,
} from './variable.js';
import Book from './book.js';

export default class Library {
     static book = [];

     static addNewBook() {
       if (bookTitle.value && bookAuthor.value) {
         for (let j = 0; j < Library.book.length; j += 1) {
           if (bookTitle.value === Library.book[j].title
            && bookAuthor.value === Library.book[j].author) {
             Library.checkBookInData();
             return;
           }
         }
         empty.style.display = ('none');
         const newBook = new Book(bookTitle.value, bookAuthor.value);

         Library.book.push(newBook);

         localStorage.setItem('list', JSON.stringify(Library.book));
         const section = document.querySelector('.bookSection');
         const div = document.createElement('div');
         div.className = ('bookList');
         div.dataset.id = (Library.book.length - 1);
         section.appendChild(div);
         const bookInfo = document.createElement('p');
         bookInfo.textContent = (`"${bookTitle.value}" by ${bookAuthor.value}`);
         bookInfo.className = ('bookInfo');
         div.appendChild(bookInfo);
         const removeButton = document.createElement('button');
         removeButton.textContent = ('Remove');
         removeButton.className = ('removee');
         removeButton.id = (Library.book.length - 1);
         div.appendChild(removeButton);
         const removeBtn = document.querySelectorAll('.removee');
         removeBtn.forEach((item) => item.addEventListener('click', Library.removeBook));
         Library.clearFields();
         Library.showSuccessMessage();
       }
     }

     static checkBookInData() {
       bookExist.style.display = ('block');
       Library.clearFields();
       Library.removeMessageOnInput();
     }

     static clearFields() {
       bookTitle.value = ('');
       bookAuthor.value = ('');
     }

     static showSuccessMessage() {
       const bookAdded = document.querySelector('.bookAdded');
       bookAdded.style.display = ('block');
       Library.removeMessageOnInput();
     }

     static removeMessageOnInput() {
       const bookAdded = document.querySelector('.bookAdded');
       input.forEach((item) => {
         item.addEventListener('focus', () => {
           bookAdded.style.display = ('none');
           bookExist.style.display = ('none');
         });
       });
     }

     static removeBook(ev) {
       const elementToRemove = document.querySelectorAll('[data-id]');
       elementToRemove.forEach((item) => {
         if (item.dataset.id === ev.target.id) {
           item.style.display = ('none');
         }
       });
       for (let i = 0; i < Library.book.length; i += 1) {
         if (i.toString() === ev.target.id) {
           Library.book.splice(i, 1);
           localStorage.setItem('list', JSON.stringify(Library.book));
         }
       }
     }

     static init() {
       for (let i = 0; i < Library.book.length; i += 1) {
         const section = document.querySelector('.bookSection');
         const div = document.createElement('div');
         div.className = ('bookList');
         div.dataset.id = (i);
         const bookInfo = document.createElement('p');
         bookInfo.textContent = (`"${Library.book[i].title}" by ${Library.book[i].author}`);

         console.log(data);

         bookInfo.className = ('bookInfo');
         div.appendChild(bookInfo);
         const removeButton = document.createElement('button');
         removeButton.textContent = ('Remove');
         removeButton.className = ('removee');
         removeButton.id = (i);
         div.appendChild(removeButton);
         section.appendChild(div);
         const removeBtn = document.querySelectorAll('.removee');
         removeBtn.forEach((item) => item.addEventListener('click', Library.removeBook));
       }
     }

     static onloadFunction() {
       const empty = document.querySelector('.emptyCollection');
       const data = JSON.parse(localStorage.getItem('list'));
       console.log(data);
       if (data[0] !== undefined) {
         empty.style.display = ('none');
         Library.book = data;

         console.log(Library.book);
         Library.init();
       } else {
         empty.style.display = ('flex');
       }
     }
}
