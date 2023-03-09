// 비디오 게임을 만든다고 가정하면, 플레이어에 대한 객체(object)가 필요하다
// 플레이어가 한명이라면 아래와 같이 하나만 만들면 되겠지만,
const playerOne = {
  name:'Bill',
  health:85,
  skill:'Teaching'
}

// 플레이어가 많아지면 아래와 같이 만들어야하고, 이는 이슈가 생긴다
const playerTwo = {
  name:'Ron',
  health:90,
  skill:'Magic'
}

const playerThree = {
  name:'Harry',
  health:100,
  skill:'Teaching someone'
}

// 일단 첫 번째로, 여기서 발견되는 패턴은 세 플레이어 모두 같은 속성(property)을 가지고 있다는 것. 이러한 점에서 발생되는 문제점은 '플레이어를 구성하는 모습'에 대한 '구조'에 관한 고민이 없다는 것. 이렇게되면 오타(가령, health를 heatlh로 적는 행위)를 잡기도 어려울 것이고, 새로운 속성인 경험치(experience)를 모든 플레이어에게 부여한다고 가정하면 일일이 경험치라는 옵션을 부여해야 한다.

// 이런 사태를 대비해서 플레이어를 찍어내는 일종의 '공장'이 필요하다. 즉, 개발자가 데이터만 넣으면 함수가 옵션에 대한 부분을 처리하고, 플레이어 객체를 리턴값으로 주는 공장. 이렇게 되면 새로운 속성을 부여한다고 해도 일일이 하나씩 집어넣는게 아니라 함수에 변경값을 주게 되면 모든 플레이어들이 한번에 업데이트 될 것이다. 

// 이러한 업무를 처리하는 것이 바로 class다.
class Player{
  constructor(name, health, skill){
    this.name = name;
    this.health = health;
    this.skill = skill;
    this.xp = 0;}
  sayHello(){
    return `Hi, my name is ${this.name} and my skill is ${this.skill}`
  }
  takeHit(){
    return `피격당했습니다. 이전:${this.health}, 이후:${this.health-5}`
  }
}


const bill = new Player('Bill', 85, 'programmer');
const elon = new Player('Elon', 90, 'Legend');
const warren = new Player('Warren', 100, 'Investor');

console.log(bill.sayHello());
console.log(bill.takeHit());

// 이렇게 편리하게 일을 진행하게끔 해주는 객체지향 프로그래밍 중 가장 핵심은 바로 '상속'이다. 상속은 코드의 중복성을 줄이고 코드를 재사용 가능한 조각으로 나누게끔 해준다. 상속을 받는 자식 클래스와 상속값을 주는 부모클래스가 있는데, 상속을 받는 자녀클래스는 부모클래스의 속성을 '상속' 받는것이므로, 부모클래스의 속성을 갖게 된다.

// 심즈로 예시를 들면, 게임 플레이를 위해 '인간'에 대한 클래스를 만들어야 할 것이다.
class Human{
  constructor(name){
    this.name=name;
    this.arms = 2;
    this.legs = 2;
  }
}

// 아기에 대한 클래스가 있어야 할 것이고,
class Baby{
  constructor(name){
    this.name=name;
    this.arms = 2;
    this.legs = 2;
    this.cute = true;
  }
  cry(){
    return '응애..!';
  }
}

// 청소년에 대한 클래스가 필요할 것이다.
class Teenager{
  constructor(name){
    this.name=name;
    this.arms = 2;
    this.legs = 2;
    this.emotional = true;
  }
  cry(){
    return '%$@18!#!@!';
  }
}

// 하지만 이런 경우에는 중복성이 일어난다. 세 클래스의 이름은 모두 다르지만 모두 동일한 인간으로서 같은 속성을 가지는 모습을 볼 수 있다. 이럴때 사용하는것이 바로 상속.
class Baby extends Human{
  constructor(name){
    super(name);
    this.cute = true;
  }
  cry(){
    return '응애..!';}}

class Teenager extends Human{
  constructor(name){
    super(name);
    this.emotional = true;
  }
  cry(){
    return '%$@18!#!@!';}}

// super 메소드의 경우, 부모 클래스의 속성값을 호출한다는 의미.