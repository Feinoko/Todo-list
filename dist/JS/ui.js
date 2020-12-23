
/* ==============================
all functions that serve a UI role
============================= */

/* IMPORTS */
import { log } from './utility.js'

/* Functional */

/* cosmetic-only (anims, fades, etc...) */

// adds the class that fades in created element
export function fadeIn() {
  const item = document.querySelector('.list-item:last-child');
  item.className += ' fade-in';
}

// validation of item
export function validateInput(task) {
  if (task !== '') {
    return true;
  } else {
    return false;
  }
}

// show error msg
export function errMsg(err) {
  const er = document.querySelector('.err-area');
  er.textContent = err;
  er.classList.remove('opacity-0');
  setTimeout(makeVisible, 2500);
  function makeVisible() {
    er.classList.add('opacity-0');
  }

  // switch(err) {
  //   case invalidInput : 
  //     log('test input is invalid!');
  //     break;
  // }
}
