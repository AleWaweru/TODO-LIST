const listItems = document.getElementById('list-container');
const saveData = () => {
  localStorage.setItem('data', listItems.innerHTML);
};

export default function clearCheckedItems() {
  const listItems = document.getElementById('list-container').children;

  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].classList.contains('checked')) {
      listItems[i].remove();
      i -= 1;
    }
  }

  saveData();
}