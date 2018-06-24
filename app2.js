function onReady() {
  const addToDoForm = document.getElementById('newToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const delete = document.getElementById('delete')

  addToDoForm.addEventListener('submit', () => {
      event.preventDefault();

      let title = newToDoText.value;

      let newLi = document.createElement('li');

      let checkbox = document.createElement('input');

      checkbox.type = "checkbox";

      newLi.textContent = title;

      newLi.appendChild(checkbox);

      toDoList.appendChild(newLi);

      newToDoText.value = '';
  });

  delete.addEventListener("reset", function(){}[ b])

  }


window.onload = function() {
  onReady();
};
