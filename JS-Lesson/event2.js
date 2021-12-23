const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click
// clearBtn.addEventListener('click', runEvent);
// double click
// clearBtn.addEventListener('ondblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// MouseUp
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// clearBtn.addEventListener('mouseenter', runEvent);
// mouseleave
// clearBtn.addEventListener('mouseleave', runEvent);
// mouseover
// clearBtn.addEventListener('mouseover', runEvent);
// mouseout
// clearBtn.addEventListener('mouseout', runEvent);
// mousemove
card.addEventListener('mousemove', runEvent);






function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}