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

  saveData();
}
