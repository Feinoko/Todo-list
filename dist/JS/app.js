/* IMPORTS */
import { log } from './utility.js'
import { fadeIn, validateInput, errMsg } from './ui.js'

/* VARIABLES */
//#region error messages
const form = document.querySelector('form');
const taskInput = document.querySelector('.input-text');
const taskList = document.querySelector('.task-list');
// err messages
const invalidInput = 'please enter a valid input';
//#endregion

/* EVENT HANDLERS */

// adding task to the list
form.addEventListener('submit', function(e) {

  // get the input value
  let task = taskInput.value;

  // validation
  // show err message if nothing is inputted
  if (validateInput(task) === false)
    {
      errMsg(invalidInput);
      return; //exit the event handler entirely
    }

  // saving to storage
  // get the current local storage
  let tasks;
  localStorage.getItem('tasks') === null ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
  // set the task item into storage
  tasks.push(task);
  log(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // clear the task input
  taskInput.value = '';

  // creating the list item
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.textContent = task;

  taskList.appendChild(listItem); // will append as last child (by default)
  setTimeout(fadeIn, 1); // for some reason, need a small delay until adding the fadein class for it to work
 
  // preventing default form behavior when submitting
  e.preventDefault();
});

