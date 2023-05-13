
// local storage
export default function saveData() {
  // Create an array of task objects from the list items
  const tasksArray = [];
  const listItems = document.querySelectorAll('#list-container li');

  listItems.forEach((item, index) => {
    const task = {
      description: item.textContent,
      index: index + 1,
      completed: item.classList.contains('checked'),
    };
    tasksArray.push(task);
  });

  // Convert the tasks array to a JSON string and store it in local storage
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}




