let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');


value = list;
value = listItem

// Get Child nodes
value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes[0].nodeName;
value = list.childNodes[3].nodeType;


// Get Children element nodes
value = list.children;
value = list.children[1];
list.children[1].textContent = 'Hello';

// Chidlren of Children
list.children[3].children[1].id = 'test-text';
value = list.children[3].children[0];

// FirstChild
value = list.firstChild;
value = list.firstElementChild;
// LastChild
value = list.lastChild;
value = list.lastElementChild;


// Count child elements
value = list.childElementCount;

// Get parent node
value = listItem.parentNode;
value = listItem.parentElement;
value = listItem.parentElement.parentElement;

// Get next siblings
value = listItem.nextSibling;
value = listItem.nextElementSibling;

// Get prev sibling
value = listItem.previousSibling;
value = listItem.previousElementSibling;

console.log(value);