/* IMPORTS */
import { log } from './utility.js'
import { fadeIn, validateInput, errMsg, fetchMemory } from './ui.js'

/* VARIABLES */
//#region error messages
const form = document.querySelector('form');
const taskInput = document.querySelector('.input-text');
const taskList = document.querySelector('.task-list');
// err messages
const invalidInput = 'please enter a valid input';
//#endregion
const filtTasks = document.querySelector('.input-text[placeholder="Filter Tasks"]');
let filtValue = filtTasks.value;

/* EVENT HANDLERS */

// loading tasks from memory on load
window.addEventListener('load', function() {
  fetchMemory();
  
});

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
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // clear the task input
  taskInput.value = '';

  // creating the list item
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.textContent = task;
  const delBtn = document.createElement('a');
  delBtn.className = 'del-btn';
  delBtn.textContent = 'x';

  taskList.appendChild(listItem); // will append as last child (by default)
  taskList.appendChild(delBtn);
  setTimeout(fadeIn, 1); // for some reason, need a small delay until adding the fadein class for it to work
 
  // preventing default form behavior when submitting
  e.preventDefault();
});

// deleting task
// using event delegation
document.body.addEventListener('click', function(e) {

  // trigger event only when clicking the del btn
  if (e.target.classList.contains('del-btn')) {
    /* removing from memory prior deleting on UI */
    const task = e.target.previousElementSibling;
    const taskContent = task.textContent;
    // get tasks from memory
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    // cycling thru each value of saved tasks to find the one that matches the deleted item exactly
    tasks.forEach(function(task, index) {
      if (task === taskContent) {
        tasks.splice(index, 1); // removing the value from memory that matches the deleted one
      }
      log(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    
    // removing the task itself which is the previous sibling of the del btn
    e.target.previousElementSibling.remove();
    // removing the del btn
    e.target.remove();

    
  }

  // to prevent default behavior of button
  e.preventDefault;
});

// clearing all tasks
// get the clear tasks btn
const clrBtn = document.querySelector('.clear-tasks-btn');
clrBtn.addEventListener('click', function(e) {
  localStorage.clear();
  location.reload();
  e.preventDefault;
});

// filter tasks
// run below when typin in filter box
filtTasks.addEventListener('input', function() {
  filtValue = filtTasks.value;
  console.log(filtValue);
  // get all list items as an array (not a node list if only using querySelectorAll) to be able to use array functions like forEach...
  const listedTasks = Array.from(document.querySelectorAll('.list-item'));
  console.log(listedTasks);
  listedTasks.forEach(function(task) {
    console.log(task.textContent);
    // hide task that does not fit filter input
    if(!task.textContent.includes(filtTasks.value)) {
      log('no-match');
      task.style.visibility = 'hidden';
      task.nextElementSibling.style.visibility = 'hidden';
    } else {
      task.style.visibility = 'visible';
      task.nextElementSibling.style.visibility = 'visible';
    }
  })
});


