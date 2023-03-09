const first_h1 = document.querySelector('div.hello:first-child h1');
const second_h1 = document.querySelector('div.hello h1#second_title');

// function handleTitleClick(){
//   const currentColor = first_h1.style.color
//   let newColor;
//   if (currentColor === 'skyblue'){
//     newColor = 'tomato'
//   } else {
//     newColor = 'skyblue'
//   }
//   first_h1.style.color = newColor;
// }
// 위와같이 js에서 css작업을 할 수도 있지만, css파일에 따로 색정보를 저장시키는게 편하다.

// function handleTitleClick(){
//   const clickedClass = 'clicked' // 이와 같은 방법은 계속 class name을 지우는
//   if(first_h1.className === clickedClass){ // 상황이 발생한다
//     first_h1.className=''; // 따라서 이와같은 방법보다는 아래처럼 classList를 
//   }else{ // 활용해서 classname을 보존할 수 있게끔 한다
//     first_h1.className=clickedClass
//   };
// }

// function handleTitleClick(){
//   const clickedClass = 'clicked'
//   if(first_h1.classList.contains(clickedClass)){
//     first_h1.classList.remove(clickedClass);
//   }else{
//     first_h1.classList.add(clickedClass);
//   };
// }

// toggle은 위의 방법을 조금 더 간편하게 해주는 역할의 함수이다.
function handleTitleClick(){
  first_h1.classList.toggle('clicked');
}

first_h1.addEventListener("click", handleTitleClick);