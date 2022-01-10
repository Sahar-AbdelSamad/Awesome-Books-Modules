import loadNav from './modules/nav.js';
import x from './modules/library.js';
import startTime from './modules/startTime.js'

loadNav();
startTime()
const addBtn = document.querySelector('.btn');
addBtn.addEventListener('click', x.addNewBook);
window.onload = x.onloadFunction();