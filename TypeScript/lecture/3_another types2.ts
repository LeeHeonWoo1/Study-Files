// unknown : 타입의 속성을 미리 알지 못할 때 사용한다. 
// 강제로 선언한 변수에 대한 타입체크를 시킨다고 볼 수 있다.
let x:unknown;

// let z = x + 1; // 에러가 나는 이유는 x는 unknown타입이기 때문이다.
// 하지만 number인지 확인해주는 절차를 거친다면
if(typeof x === 'number'){
  let y = x + 1; // 정상적으로 작성이 되는 것을 확인할 수 있다.
};

// let z = x.toUpperCase(); // 이 또한 지금은 에러가 나지만,
// string인지 확인해주는 절차를 거친다면
if(typeof x === 'string'){
  let y = x.toUpperCase(); // 정상적으로 작성이 되는 것을 확인할 수 있다.
};

// void : 아무것도 return하지 않는 함수를 지칭한다. 타입으로 지정해줘도 상관없지만 따로 지정해줄 필요는 없다.
function hello(){
  console.log('x');
};
const a1 = hello();
a1;
// a1.toUpperCase(); // 이 또한 불가. void에는 toUpperCase라는 속성이 없다.

// never : 사용빈도수가 높진 않다. 함수가 절대 return하지 않을 때 발생한다.
function hello1() : never {
  // return 'X' // 에러발생
  throw new Error('X'); // 함수를 return시키지 않고 에러를 발생시킬 때 쓰는 함수
}
function hello2(name:number|string){
  if(typeof name==='number'){
    name // number 타입
  }else if(typeof name==='string'){
    name // string 타입
  }else{
    name; // never 타입
  }
}