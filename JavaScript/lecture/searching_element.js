
// const title = document.getElementsByTagName('h1') // 태그이름으로 찾기
// const title = document.querySelectorAll('.hello h1') // 모든 h1태그 가져오기 
const title = document.querySelector('.hello h1:first-child') // 모든 h1태그들 중 첫 번째 요소 가져오기

// queryselector를 사용하면 조금 더 css처럼 쓸 수 있다.
// 또한, 같은 hello라는 class name을 가진 요소들이 3개가 있다고 가정하면 querySelector를 사용하면 처음 하나만 가져오게 된다. 모두 가져오려면 querySelectorAll을 사용해야 한다.

console.log(title);
