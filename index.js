console.log("hi")

import loadNav from './modules/nav.js';
import x from './modules/library.js';
//import { DateTime } from 'luxon';

loadNav();

// const { DateTime } = require("luxon");
// const now = DateTime.now();
// const timeNow = document.querySelector('.time');
// timeNow.innerText = now;



const addBtn = document.querySelector('.btn');
addBtn.addEventListener('click', x.addNewBook);
window.onload = x.onloadFunction();