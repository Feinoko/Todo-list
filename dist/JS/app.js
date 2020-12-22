/* features / functionality
  primary:
  adding tasks to the task list
  saving added tasks to local storage
  removing individual tasks
  searching specific tasks by filtering them
  clearing all tasks

  secondary
  add night mode
*/

/* coding guidelines memo 
KISS : Keep It Stupid Simple
DRY : Dont Repeat Yourself
YAGNI : You Aint Gonna Need it
Break it down to very small bits
Organise structure beforehand
*/

/* Current task 
==========
make the newly created list item fade in - completed 22.12.20 11:40
separating js files in small chunks
========== */

/* IMPORTS */
import { log } from './utility.js'

log('hello world!');

/* VARIABLES */
const form = document.querySelector('form');
const taskInput = document.querySelector('.input-text');
const taskList = document.querySelector('.task-list');

/* EVENT HANDLERS */

// adding task to the list
form.addEventListener('submit', function(e) {

  // get the input value
  const task = taskInput.value;

  // clear the input
  taskInput.value = '';

  // creating the list item
  const listItem = document.createElement('li');
  listItem.className = 'list-item transition-all duration-500 opacity-0';
  listItem.textContent = task;
  log(listItem);
  taskList.appendChild(listItem); // will append as last child (by default)
  setTimeout(fadeIn, 1); // for some reason, need a small delay until adding the fadein class for it to work
 
  // preventing default form behavior when submitting
  e.preventDefault();
});

/* UI props / cosmetics */

// adds the class that fades in created element
  function fadeIn() {
    const item = document.querySelector('.list-item:last-child');
    item.className += ' fade-in';
  }
