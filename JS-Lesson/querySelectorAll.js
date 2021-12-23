

const items = document.getElementsByClassName('collection-item')

console.log(items);
console.log(items[3]);
items[2].style.color = 'red';
items[3].textContent = 'hello';

const listItem = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItem);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
// console.log(lis);
lis[2].style.color = 'red';
lis[3].textContent = 'hello';

// Convert HTML Collection into array
lis = Array.from(lis)

lis.reverse();

lis.forEach(function(li, index) {
  console.log(li.classname);
  li.textContent = `${index}: Hey there`;
});


const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li) {
  li.style.background = 'purple';
  li.style.color = 'white';
});

for(let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = 'pink';
  liEven[i].style.color = 'white';

}

// console.log(lis);