export {bookAuthor,bookTitle, empty, input, data, bookExist};
const bookTitle = document.querySelector('.title');
const bookAuthor = document.querySelector('.author');
const empty = document.querySelector('.emptyCollection');
const input = document.querySelectorAll('input');
const data = JSON.parse(localStorage.getItem('list'));
const bookExist = document.querySelector('.bookExist');
