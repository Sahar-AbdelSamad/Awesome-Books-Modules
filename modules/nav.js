import Library from './library.js';
import { empty } from './variable.js';

export default function loadNav() {
  const navList = document.querySelector('.list');
  const bookList = document.querySelector('.bookListSection');
  const navAddBook = document.querySelector('.addBook');
  const bookCreation = document.querySelector('.bookCreationSection');
  const navContact = document.querySelector('.contact');
  const contactInfo = document.querySelector('.contactSectionNav');
  const bookExist = document.querySelector('.bookExist');

  navList.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (Library.book.length === 0) {
      empty.style.display = ('flex');
    }
    bookList.style.display = ('block');
    bookCreation.style.display = ('none');
    contactInfo.style.display = ('none');
  });

  navAddBook.addEventListener('click', (ev) => {
    ev.preventDefault();
    const bookAdded = document.querySelector('.bookAdded');
    bookExist.style.display = ('none');
    bookAdded.style.display = ('none');
    bookCreation.style.display = ('flex');
    bookList.style.display = ('none');
    contactInfo.style.display = ('none');
  });

  navContact.addEventListener('click', (ev) => {
    ev.preventDefault();
    contactInfo.style.display = ('flex');
    bookList.style.display = ('none');
    bookCreation.style.display = ('none');
  });
}
