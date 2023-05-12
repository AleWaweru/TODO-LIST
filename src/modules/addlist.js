import clearCheckedItems from './delete.js';
import editTask from './Update.js';
import saveData from './saveData.js';

const listItems = document.getElementById('list-container');
const InputBox = document.getElementById('input-box');
const clearBtn = document.getElementById('close-btn');
const addTask = document.getElementById('addTask');

let counter = 0;

function screenData() {
  localStorage.setItem('data', listItems.innerHTML);
}

function addTask1() {
  if (InputBox.value === '') {
    alert('input cannot be blank');
  } else {
    counter += 1;
    const li = document.createElement('li');
    li.innerHTML = InputBox.value;

    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    span.className = 'close';
    span.onclick = () => {
      const taskList = JSON.parse(localStorage.getItem('tasks'));
      const taskIndex = Array.prototype.indexOf.call(listItems.children, li);
      taskList.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(taskList));
      li.remove();
    };

    const editIcon = document.createElement('i');
    editIcon.className = 'fa fa-edit';
    editIcon.onclick = () => {
      editTask(editIcon);
    };

    li.appendChild(editIcon);
    li.appendChild(span);

    listItems.appendChild(li);

    const task = {
      index: counter,
      description: InputBox.value,
      completed: false,
    };

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }

  InputBox.value = '';
  screenData();
}

addTask.addEventListener('click', addTask1);
listItems.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false,
);

function showTask() {
  listItems.innerHTML = localStorage.getItem('data');
}
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
