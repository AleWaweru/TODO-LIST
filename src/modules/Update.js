const listItems = document.getElementById('list-container');

export default function editTask(element) {
  const listItem = element.parentElement;
  const taskIndex = Array.prototype.indexOf.call(listItems.children, listItem);

  const taskList = JSON.parse(localStorage.getItem('tasks'));
  const task = taskList[taskIndex];

  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.value = task.description;

  listItem.innerHTML = '';
  listItem.appendChild(inputField);
  inputField.focus();

  function saveChanges() {
    task.description = inputField.value;
    taskList[taskIndex] = task;
    localStorage.setItem('tasks', JSON.stringify(taskList));

    listItem.innerHTML = task.description;
    listItem.appendChild(element);
  }

  inputField.addEventListener('blur', saveChanges);
  inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      saveChanges();
      event.preventDefault();
    }
  });
}
