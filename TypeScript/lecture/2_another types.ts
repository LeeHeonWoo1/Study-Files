// readonly : 수정을 불가하게 만든다(불변성 부여). 말 그대로 읽기전용.
type Name1 = string;
type Age1 = number;
type Player1 = {
  readonly name : Name1 | null // srting이거나 null값이거나
  age? : Age1 // optional이 부여된 속성은 이미 undefined속성도 포함중이다.
};

function playerMaker2(name:Name1) : Player1 {
  return {name : name};
};
const jjw = playerMaker2('jjw');
// jjw.name = 'jjw1'; // readonly 속성으로 설정되었기에 빨간줄이 그이는 모습.

const numbers : readonly number[] = [1, 2, 3, 4]; // 읽기전용인 number배열.
// numbers.push(1); // 이 또한 불가하다.

const days : readonly string[] = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri'];
const smilmingDays = days.map((day, index) => `${index} ${day}`);
console.log(smilmingDays); // map함수는 사용 가능.

// Tuple : array를 생성하게 하는데, 최소한의 길이를 가져야하고 특정 위치에 특정 타입이 있어야 한다. 
const player3 : readonly [string, number, boolean] = ['1', 1, true]
// player3[0] = 1 // 불가. player3라는 배열은 첫 번째 인자는 문자열이어야 함.
// player3[0] = '3' // 불가. readonly라는 속성이 부여되면 불변성을 가짐.

// null, undefined속성 추가 가능
// const player3 : null or const player3 : undefined

// any : TypeScript의 모든 보호장치를 해제시킨다. 어떤 자료형 타입이든 될 수 있다.
// 원래라면 TS에서 a와b는 연산할 수 없다. 하지만 any를 사용해 typescript에서 빠져나옴으로 인해 연산이 가능한 것. 둘 중 하나라도 any 타입이 사라지면 연산이 불가해진다.
const a : any[] = [1, 2, 3, 4]
const b : any = true

console.log(a+b)