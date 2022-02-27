const input = document.querySelector('input');
const todos = document.getElementById('todos');

// Focus on input
input.focus();

// Load all event listners
loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTodos);
  input.addEventListener('keyup', addTodo);
  todos.addEventListener('click', deleteTodo);
}

// Get todos from LS
function getTodos() {
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-list';
    li.appendChild(document.createTextNode(todo));
    document.getElementById('todos').appendChild(li);
  })
}

// Add todo
function addTodo(e) {
  if(e.key === 'Enter') {
    const li = document.createElement('li');
    li.className = 'todo-list';
    li.appendChild(document.createTextNode(input.value));
    todos.appendChild(li);

    // Store in LS
    storeTodoInLS(input.value);

    // Clear input
    input.value = '';
  }
}

// Store todo in LS
function storeTodoInLS(todo) {
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);

  localStorage.setItem('todos', JSON.stringify(todos));
}

// Delete todo
function deleteTodo(e) {
  if (todos.children[0].classList.contains('todo-list')) {
    e.target.className = 'todo-delete'; 
    // Remove todo from LS
    removeTodoInLS(e.target);
    console.log(e.target);
  }
}

// Delete todo from LS
function removeTodoInLS(todo) {
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.forEach((task, index) => {
    if(todo.textContent === task){
      todos.splice(index, 1);
    }
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}