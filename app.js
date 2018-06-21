function onReady() {
  let deleteText = document.getElementById(0);
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      deleteText: deleteText.value 
      //2.
    });
  function renderTheUI(){
    const toDoList = document.getElementById('toDoList')

    toDoList.textContent = '';

    toDos.foreach(function(toDo) {
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      title.textContent = toDo.title;

      toDoList.appendChild(newToDo);
      newToDo.appendChild(checkbox);
    });
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
    renderTheUI();
  });
  renderTheUI();

  }
}

window.onload = function() {
  onReady();
};
