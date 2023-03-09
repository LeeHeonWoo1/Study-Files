// polymorphism : poly(many, 다양한) + morphos(structure, 형태|구조)

// 아래의 call signature가 받는 인자는 숫자로 이루어진 배열, 불리안으로 이루어진 배열, 문자열로 받는 배열이되, 아무것도 리턴하지 않는 타입이다.
// 아래의 call signature에 할당된 인자의 타입들은 모두 concrete type이다. 애초에 존재하던 타입들을 일컫는다. 이를테면 number, boolean, string...
// 하지만 superPrint([1, 2, true, false])처럼 타입들이 섞이면 이는 에러를 발생시킨다. 따라서 generic방식을 사용해서 타입을 지정해 줄 것이다. 
// generic? : 타입의 placeholder같은 느낌
// 내가 직접 라이브러리를 만드는 직업이 아니고서야 generic을 자주 사용할 일은 없다.
type SuperPrint = {
  (arr:number[]):void
  (arr:boolean[]):void
  (arr:string[]):void
  (arr: (number|boolean)[]):void
}

// <T> : generic 사용 선언구. 부등호 사이의 이름은 본인의 마음대로 적어도 상관없음.
type SuperPrint1 = <T, V>(arr:T[], b:V) => T // 1번 이라하고 

// 리턴하는 값이 없으면 타입을 지정할 때 void 를 끝에 추가하고, 배열의 첫 번째 값을 리턴하고 싶다면 T를 맨 끝에 타입으로 지정한다.
const superPrint: SuperPrint1 = (arr)=>arr[0]; // 2번이라 하자.

const a5 = superPrint([1, 2, 3, 4], 'x'); // 각 배열에 마우스 커서를 올리면
const b5 = superPrint([true, false, true], 1); // 배열 안의 자료형에 맞게
const c5 = superPrint(['a', 'b', 'c'], true); // 나오는 타입들의 종류가
const d5 = superPrint([1, 2, true, 'false'], 'ex'); // 달라지는 것을 확인할 수 있다.
console.log(a5, b5, c5, d5);

// 1번과 2번의 식을 하나로 합쳐 함수로 만들수도 있다.
function superPrint2<V>(a:V[]){
  return a[0]
}; // a는 generic방식의 타입을 갖는 배열이며, 첫 번째 배열의 요소를 return한다.