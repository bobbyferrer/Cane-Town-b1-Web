// Replace Elements

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.querySelector('#task-title');

// Get parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove Child element
list.removeChild(lis[3]);


// Classes and Attribute
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;

// Classes
value = link.className;
value = link.classList;
value = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attributes
value = link.getAttribute('href');
value = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
value = link;



console.log(value);