import loadNav from './modules/nav.js';
import Library from './modules/library.js';
import startTime from './modules/startTime.js';

loadNav();
startTime();
const addBtn = document.querySelector('.btn');
addBtn.addEventListener('click', Library.addNewBook);
window.onload = Library.onloadFunction();