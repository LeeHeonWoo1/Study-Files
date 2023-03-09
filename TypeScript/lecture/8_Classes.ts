// 추상클래스 만들기
// 추상클래스? : 다른 클래스가 상속받는 클래스. 새로운 인스턴스를 만들 수 없음.
abstract class User{
  constructor(
    private firstname:string,
    protected lastname:string,
    public nickname:string
  ){}
  // 추상 메소드 만들기
  abstract getNickName(ar:string[]):void
  
  protected getFullName(){
    return `${this.firstname}${this.lastname}`
  }
}

class Player_v1 extends User{
  getNickName(){
    console.log(this.nickname)
  }
}

// const llw = new User('lhw', 'las', '헌우'); // 이 경우 추상클래스는 새로운 객체를 생성할 수 없다고 오류메세지를 보낸다.
const llw = new Player_v1('Lee', 'Heonu', '헌우');
console.log(llw.nickname);
// console.log(llw.getFullName());
llw.getNickName();