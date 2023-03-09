// function or method overloading
// Function(=Method) Overloading은 직접 작성하기보다 외부 라이브러리에 자주 보이는 형태로, 하나의 함수가 복수의 Call Signature를 가질 때 발생한다
// 파라미터만 달라지고, 비슷한 로직이 반복되는 경우에 사용할 수 있다. 코드의 중복을 줄이고 재사용성을 높이려면 overloading을 사용하자.

// 타입을 지정할 때 파라미터의 개수가 다른 것으로 call signature가 지정되면 아래와 같이 써줘야 한다.
type Add1 = {
  (a1:number, b1:number, c:number) : number;
  (a1:number, b1:number) : number;
}

const add3:Add1 = (a, b, c?:number) => { 
  if(c) return a+b+c
  else return a + b
}

type Config = {
  path : string,
  state : object
}

type Push = {
  (path:string):void
  (config:Config):void
}

const push:Push = (config) =>{
  if(typeof config === 'string'){console.log(config)}
  else{console.log(config.path)}
}