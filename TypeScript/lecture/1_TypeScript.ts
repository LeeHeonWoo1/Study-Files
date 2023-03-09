"use strict";
// 많은 플레이어를 만들어야 한다고 가정하면 플레이어에게 일일이 타입을 지정하기엔 코드가 너무 길어진다.

// 타입의 객체화 
type Age = number;
type Name = string;
type Player = { 
  name:Name,
  age?:Age // ? : optional 속성으로 만들어주는 역할.  
};

const nico : Player = { 
  name:'nico'
};

const lynn : Player = {
  name:'lynn',
  age:16
};

function playerMaker(name:string) : Player {
  return {
    name:name
  };
};

const lhw = playerMaker('lhw');
lhw.age = 12 ;// 함수를 생성할 때 Player라는 타입을 알려주지 않으면 나이에 대한 값 할당 불가

const playerMaker1 = (name:string) : Player => ({name:name});
const lhw1 = playerMaker1('lhw1');
lhw1.age = 16 ;

// 총정리
// 타입을 지정하는 방법은 총 세 가지.
// 1. 단일 지정 == let a : string;
// 2. 객체화 == type Player = {name:string, age:number, fat:boolean};
// 3. 함수에서 사용 == function(name:string){return {name:name}};
//                  == function(name:string):Player{return {name:name}};
//                  == name = (name:string):Player=>({name:name}); ****
// 타입 지정 시 optional으로 바꾸고 싶다면 == type Player = {name:string, age?:number}
//     ==> age 뒤에 ?를 붙여주면 optional 속성으로 바뀐다.


// **** 의 함수는 기존의 Arrow Function과 문법이 사뭇 다른것을 확인할 수 있는데, 원래의 Arrow Function : const name = () => {} 식이며, 이 때는 아무것도 리턴하지 않지만 위의 함수는 object를 return하는 함수이다.

const playerMaker4 = (name:string) : Player => ({name:name});