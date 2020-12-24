
/* ==============================
all functions that serve a UI role
============================= */

/* IMPORTS */
import { log } from './utility.js'

/* Functional */

/* cosmetic-only (anims, fades, etc...) */

// adds the class that fades in created element
export function fadeIn() {
  const item = document.querySelector('.list-item:last-of-type');
  item.className += ' fade-in';
  const item2 = document.querySelector('.del-btn:last-child');
  item2.className += ' fade-in';
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
  // set duration of display
  setTimeout(makeVisible, 2500);
  function makeVisible() {
    er.classList.add('opacity-0');
  }
}

// Resume memory items on load
export function fetchMemory() {
  const taskList = document.querySelector('.task-list');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks !== null) {
    tasks.forEach(function(task) {
      let listItem = document.createElement('li');
      listItem.className = 'list-item';
      listItem.classList.add('opacity-100');
      log(listItem);
      listItem.textContent = task;
      let delBtn = document.createElement('a');
      delBtn.className = 'del-btn';
      delBtn.classList.add('opacity-100');
      delBtn.textContent = 'x';
      taskList.appendChild(listItem); // will append as last child (by default)
      taskList.appendChild(delBtn);
    });
  }
}
