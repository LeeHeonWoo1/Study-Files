// 가장 기본적인 두 가지 데이터 타입
// 1. 숫자(interger(int, 정수), float(실수))
// 2. 문자(string)
// 추가적인 데이터 타입
// boolean(true, false, null, undefined)
// bigint : 끝에 'n'이 붙으면 BigInt 자료형이다.
const bigInt = 1234567890123456789012345678901234567890n;

// const(constant : 바뀌지 않는 값. 변수 선언시 사용)
const a = 5;

// let : 변수선언 방식. 값을 수정할 수 있다. 한번 let으로 선언하고 나서 값 수정시에는 let을 다시 붙일 필요가 없다.
let b = 5;
console.log(b);
b = 6; // let없이 b값을 수정
console.log(b); // 6으로 console logging되는 모습

// var은 잘 사용하지 않는다(구버전)

// array(배열 : 파이썬과 동일하게 만들고 인덱싱도 가능하다)
const mon = 'monday';
const tue = 'tuesday';
const wen = 'wendsday';
const thu = 'thursday';
const fri = 'friday';

const daysWithoutWeekend = [mon, tue, wen, thu, fri];

console.log(daysWithoutWeekend);
console.log(daysWithoutWeekend[4]);

// push : list.append()와 같은 구문
daysWithoutWeekend.push('saturday');
console.log(daysWithoutWeekend);

// object만들기
// 위처럼 굳이 불편하게 많은 변수들을 만들어서 리스트 안에 담을 필요 없이 object를 만들어 간편하게 관리가 가능하다. 똑같이 변수선언하듯 선언이후, 대괄호가 아니라 중괄호를 작성한다.
const player = {name:'nico', points:10, fat:false,};

console.log(player); // object라고 콘솔창에 찍히는걸 볼 수 있다.
console.log(player.name);
console.log(player['name']); // 위와 같은 결과값을 가진다.

// 값을 수정할수도 있다
console.log(player.fat); // 이전에는 false였으나, 
player.fat = true;
console.log(player.fat); // true로 바뀌어 찍히는 모습을 볼 수 있다.
// ??? const로 선언한 무언가는 수정할 수 없다고 했는데...
// 여기서 const로 선언한 값은 object값 안에 있는 각 값들이 아니라, object자체를 const로 선언했기에, 위처럼 바꾸는것은 오류가 나지 않지만 아래처럼 바꾸려고 하면 오류가 난다
// player = false; // const로 선언한 player가 바뀌기에 에러가 나는 모습
player.name = 'lhw'; // player가 아니라 player.name이 바뀌기에 에러가 나지 않는다.
console.log(player.name);

// 새로운 key값을 추가할 수도 있다.
console.log(player);
player.food = 'potato';
console.log(player);

// 연산도 가능
console.log(player.points);
player.points = player.points+15;
player.points += 15 // 파이썬과 동일하게 이것도 가능
console.log(player.points); // 25가 console logging되는 모습