// 함수는 다음과 같이 작성하고, argument도 전달할 수 있다. 기본값 또한 지정 가능

function sayHello(name, age=100){
  {console.log(`Hello my name is ${name} and I"m ${age} years old`)}
}

function Add(a, b){
    console.log(a + b)
}

sayHello("lhw") // 기본값을 지정한 100살로 출력되는 모습
sayHello("lhe", 24) 
sayHello("lhd", 3)

Add(16, 54)

// object의 value값으로 함수를 지정하는 행위도 가능하다
const players = {
  name:'lhw',
  hello:function(){
    console.log('hello!')
  },
  score:15
}

console.log(players.name)
players.hello()

// return시키지 않으면 값을 어떤걸 내보내는지 알 수 없다.

const age = 96;
function calculateKrAge(ageOfForeigner){
  return (ageOfForeigner + 2);
}

const krAge = calculateKrAge(age)
console.log(krAge);

const calculator = {
  plus:function(a, b){
    return a + b;
  },
  minus:function(a, b){
    return a-b
  },
  multiply:function(a, b){
    return a*b
  },
  devide:function(a, b){
    return a/b
  }
}

console.log(calculator.plus(5, 8))
console.log(calculator.minus(15, 10))