// Set local storage item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', 30);


// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from local storage
// localStorage.removeItem('age');

// get from storage
// const name = localStorage.getItem('name');

// console.log(name);

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.querySelector('#task').value;

  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  tasks.forEach(function(task) {
   console.log(task);
  });
  console.log(tasks);
  console.log(task);
  e.preventDefault();
});