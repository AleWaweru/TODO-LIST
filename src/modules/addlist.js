import clearCheckedItems from './delete.js';

const listItems = document.getElementById('list-container');

const InputBox = document.getElementById('input-box');

const clearBtn = document.getElementById('close-btn');

const addTask = document.getElementById('addTask');

const saveData = () => {
  localStorage.setItem('data', listItems.innerHTML);
};

function addTask1() {
  if (InputBox.value === '') {
    alert('You must write something');
  } else {
    const li = document.createElement('li');
    li.draggable = true;
    li.innerHTML = InputBox.value;
    listItems.appendChild(li);

    const span = document.createElement('span');
    span.innerHTML = '\'<img src="images/trash-can.png" alt="trash">\'';
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }

  InputBox.value = '';
  saveData();
}

addTask.addEventListener('click', addTask1);

listItems.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

const showTask = () => {
  listItems.innerHTML = localStorage.getItem('data');
};
showTask();

function clearAll(e) {
  if (e.target.tagName === 'LI') {
    e.target.parentElement.remove('checked');
    saveData();
  }
}

clearBtn.addEventListener('click', clearAll);

clearBtn.addEventListener('click', () => {
  clearCheckedItems();
});
