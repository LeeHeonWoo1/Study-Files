// 추상클래스는 이걸 상속받는 다른 클래스가 가질 property와 메소드를 지정하도록 해준다.
// 추상클래스를 왜 쓰나? 상속받는 클래스가 어떤 방식으로 작동해야하는지 설계할 때 자주 사용한다. 문제점도 존재하는데, 자바스크립트에서는 abstract의 개념이 없다는 것. 자바스크립트로 변환 시 abstract는 지워지고 일반적인 클래스로 보이게된다. 아래를 보면,
abstract class USer{
  constructor(
    protected firstname:string,
    protected lastname:string
  ){}
  abstract sayHi(name:string):string // 추상메소드로 sayHi와
  abstract fullname():string // fullname을 지정했기 때문에
}

class PLayer extends USer { // 상속받는 클래스에서 sayHi와 fullname을 정의해줘야 한다.
  fullname(){
    return `${this.firstname}${this.lastname}`
  }

  sayHi(name: string){
    return `Hello ${name}. My name is ${this.fullname()}`
  }
}

// 이런식으로 일종의 청사진을 만드는게 추상클래스의 일인데, 자바스크립트에서는 abstract라는 단어가 지워질뿐 추상클래스가 동일하게 보인다. 이런 문제점을 해결하려면 어떻게 해야할까? interface 버전으로 사용하려면 어떻게 해야할까?

// 먼저, 위와 동일하게 type을 지정하는데 type을 사용하는게 아니라 interface로 작성.
interface USEr{
  firstname : string,
  lastname : string,
  sayHi(name:string):string,
  fullname():string
}
// 인터페이스들은 클래스가 아니라, 클래스의 모양읕 특성해줄 수 있도록 하는 간단한 방법이다.
interface Human{
  health:number
}

// 그리고 상속받을 땐 extends가 아니라 implements라는 문법으로 상속한다.
class PLAyer implements USEr, Human{
  constructor(
    // 단, 주의해야할 점은 protect나 private가 아닌 public으로만 선언해야한다.
    public firstname:string,
    public lastname:string,
    public health:number
  ){};
  fullname(){
    return `${this.firstname}${this.lastname}`
  }

  sayHi(name: string){
    return `Hello ${name}. My name is ${this.fullname()}`
  }
}
// 굳이 이렇게까지 하는 이유? 
// 1. 지금이야 간단하지만 많은 데이터들이 쌓인다고 가정하면 JS파일에서는 많은 interface 코드 블럭들이 사라지게 될 것이다. => 용량절감!
// 2. 다른 팀과 협업 시에 여러 인터페이스들을 만들어 두고 각 팀원들이 각자가 원하는 각자의 방식으로 클래스를 상속하도록 하는건 업무 효율을 증대시킨다.

// 클래스를 타입으로도 쓸 수 있고, 인터페이스도 타입으로 쓸 수 있다.
function makeUser(user:PLAyer){
  console.log(user)
}

makeUser({
  firstname:'lee',
  lastname:'heonu',
  health:4,
  sayHi:()=>'lee',
  fullname:()=>'string'
})