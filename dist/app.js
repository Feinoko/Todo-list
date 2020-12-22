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
make the newly created list item fade in
========== */

/* VARIABLES */
const form = document.querySelector('form');
const taskInput = document.querySelector('.input-text');
const taskList = document.querySelector('.task-list');

/* EVENT HANDLERS */

// when adding a task
form.addEventListener('submit', function(e) {

  // get the input value
  const task = taskInput.value;
  // console.log(task);

  // clear the input
  taskInput.value = '';

  // creating the list item
  const listItem = document.createElement('li');
  listItem.className = 'list-item transition-all duration-500 opacity-0';
  listItem.textContent = task;
  // listItem.setAttribute('onload', 'fadeIn()');
  log(listItem);
  taskList.appendChild(listItem); // will append as last child (by default)
  setTimeout(fadeIn, 5);
  function fadeIn() {
    const item = document.querySelector('.list-item:last-child');
    listItem.className += ' fade-in';
  }
 
  
  
  e.preventDefault();
});

/* UI props / cosmetics */

// adds the class that fades in created element
function fadeIn() {
  const listItem = document.querySelector('.list-item:last-child'); // have to redeclare it due to function scope
  listItem.className += ' fade-in'; // the space is so that it adds the class instead of removing the current
}

/* Utility */

// shortcut for console.log
function log(msg) {
  console.log(msg);
}