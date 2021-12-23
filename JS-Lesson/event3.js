const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');

// Clear Input
taskInput.value = '';
form.addEventListener('submit', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// keydown
// taskInput.addEventListener('keydown', runEvent);
// keypress
// taskInput.addEventListener('keypress', runEvent);
// focus
// taskInput.addEventListener('focus', runEvent);
// blur
// taskInput.addEventListener('blur', runEvent);
// input
// taskInput.addEventListener('input', runEvent);
// paste
// taskInput.addEventListener('paste', runEvent);
// cut
taskInput.addEventListener('cut', runEvent);



function runEvent(e) {
console.log(`Event Type: ${e.type}`);

console.log(e.target.value);

heading.innerHTML = e.target.value;

// Get input value

console.log(taskInput.value);

e.preventDefault();

}