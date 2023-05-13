const listItems = document.getElementById('list-container');
const saveData = () => {
  localStorage.setItem('data', listItems.innerHTML);
};

export default function clearCheckedItems() {
  const listContainer = document.getElementById('list-container');
  const listItems = Array.from(listContainer.children);
  const uncheckedItems = listItems.filter((item) => !item.classList.contains('checked'));

  listContainer.innerHTML = '';
  uncheckedItems.forEach((item) => listContainer.appendChild(item));

  const updatedTasksArray = uncheckedItems.map((item, index) => {
    const task = {
      description: item.textContent,
      index: index + 1,
      completed: item.classList.contains('checked'),
    };
    return task;
  }).filter(task => !task.completed);

  localStorage.setItem('tasks', JSON.stringify(updatedTasksArray));


  saveData();
}


  
