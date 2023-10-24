const ul = document.querySelector(".list__holder");
let todos = JSON.parse(localStorage.getItem("todos")) ?? [];
let but = document.querySelector(".delete__completed");

function deleteToDo(id) {
  todos = todos.filter((elem) => id !== elem.id);
  renderTodos();
}
function toLocal() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodo({ text, id, isDone }) {
  let li = document.createElement("li");
  li.innerHTML = `<input name="check" type="checkbox" class="check" id =${id}>
      <span class="text__toDo">${text}</span>
      <button class ="delete__toDo" >❌</button>`;
  li.className = "list";
  const del = li.querySelector(".delete__toDo");
  del.addEventListener("click", () => deleteToDo(id));
  let inp = li.querySelector(".check");
  inp.checked = isDone;
  inp.addEventListener("change", () => toggleTask(id));
  let notesStorage = localStorage.getItem("ul");
  return li;
}
function renderTodos() {
  toLocal();
  ul.innerHTML = "";
  todos.forEach((element) => {
    ul.append(createTodo(element));
  });
}
function addToDo(text) {
  if (text.trim().length) {
    todos.push({
      text: text,
      id: `id-${Date.now()}`,
      isDone: false,
    });
  }
  inputAdd.value= ""

  renderTodos();
}
// Меняем isDone true to false
function toggleTask(id) {
  const findedElem = todos.find((elem) => elem.id === id);
  findedElem.isDone = !findedElem.isDone;
  renderTodos();
}
// Удаление выполненных задач (isDone: true)
function deleteCompleted(isDone) {
  todos = todos.filter((elem) => elem.isDone !== true);
  renderTodos();
}
let inputAdd = document.querySelector(".input__add");
let buttonAdd = document.querySelector(".button__add");
let form = document.querySelector(".form_addToDo");

form.addEventListener("submit", (e) => {
  addToDo(inputAdd.value.trim());
  e.preventDefault();
  
});
buttonAdd.addEventListener("click", () => {
  addToDo(inputAdd.value);
});
function deleteAll() {
  todos = [];
  renderTodos();
}
  function resetIt () {

  }
  renderTodos();
  function reset() {
  form.reset()
};
 
