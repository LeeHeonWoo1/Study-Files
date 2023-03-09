const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')
const todoInput = document.querySelector('#todo-form')
const HIDDEN_ClASSNAME = 'hidden' // 부여할 class name
const USERNAME_KEY = 'username'
const savedUsername = localStorage.getItem(USERNAME_KEY)//localStorage에 저장된 이름을 가져온다.

function onLoginSubmit(info){
  const username = loginInput.value; // 사용자가 입력하는 이름
  info.preventDefault(); // 기본적인 기능동작을 막는다. 이 때는 submit을 막는다
  loginForm.classList.add('hidden'); // class name부여
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
} 

function paintGreeting(username){
  greeting.innerText = `Hello ${username}` // form이 숨겨지고 난 후 입력할 html 내용
  greeting.classList.remove(HIDDEN_ClASSNAME); // form이 숨겨지고 난 후 숨겨져있던 h1태그를 다시 드러냄
  todoInput.classList.remove(HIDDEN_ClASSNAME);
}

if (savedUsername === null){
  loginForm.classList.remove(HIDDEN_ClASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
}else{
  paintGreeting(savedUsername);
}

