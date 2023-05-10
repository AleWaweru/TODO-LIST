import tasksToDo from './Array.js';

export default class ContentList {
  static displayToDoList = () => {
    const toDoListContainer = document.querySelector(
      '.to-do-list',
    );
    // sort the tasksToDo array by index
    tasksToDo.sort((a, b) => a.index - b.index);
    tasksToDo.forEach((task) => {
      const listItem = document.createElement('div');
      listItem.className = 'to-do-list-item';
      listItem.innerHTML = `
  <input type="checkbox" class ="input-item" id="${task.index}" name="${task.description}" value="${task.description}"> ${task.description}
  `;
      const optionBtn = document.createElement('button');
      optionBtn.className = 'option-btn';
      optionBtn.innerHTML = '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>';
      listItem.appendChild(optionBtn);
      toDoListContainer.appendChild(listItem);
    });
  };
}
