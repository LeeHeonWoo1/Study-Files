const toDoForm = document.getElementById('todo-form')
const toDoList = document.getElementById('todo-list')
const toDoInput = document.querySelector('#todo-form input')

const TODOS_KEY = 'todos'

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => { return (toDo.id !== parseInt(li.id))});
  saveToDos();
}

function paintToDo(todo){
  const li = document.createElement('li');
  li.id = todo.id;
  const span = document.createElement('span');
  span.innerText = todo.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text:newToDo,
    id:Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
}

