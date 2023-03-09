const first_h1 = document.querySelector('div.hello:first-child h1');
const second_h1 = document.querySelector('div.hello h1#second_title');

console.dir(second_h1);

// js파일에서 style변경도 가능하다.
// title.style.color = 'skyblue'

// console.dir을 찍었을 때 시작이 on~으로 하는 모든것들이 이벤트다.
// 사용할때는 on을 제외한 단어만 적어야함(onclick => click만 작성)
function handleTitleClick(){
  first_h1.style.color = 'skyblue';
  console.log('title was clicked!');
}

function handleMouseEnter(){
  second_h1.style.color = 'white';
  second_h1.innerText = 'Mouse is Here :)';
}

function handleMouseLeave(){
  second_h1.style.color = 'pink';
  second_h1.innerText = 'Mouse is leave :(';
}

function handleWindowResize(){
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy(){
  alert('복사를 완료했습니다.')
}

function handleWindowOffline(){
  alert('wifi 접속이 해제되었습니다.')
}

function handleWindowOnline(){
  alert('wifi가 연결되었습니다.')
}

first_h1.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
second_h1.addEventListener('mouseenter', handleMouseEnter);
// title2.onmouseenter = handleMouseEnter;
second_h1.addEventListener('mouseleave', handleMouseLeave);
// title2.onmouseleave = handleMouseLeave;


// window : 웹페이지를 일컫는다.
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline)
window.addEventListener('online', handleWindowOnline)