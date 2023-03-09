// 다형성, 제네릭, 클래스, 인터페이스 모두 합치기
interface SStorage<T>{
  [key:string]: T
}

// generic을 class로 보내고 class는 generic을 interface로 보낸 뒤에 interface는 generic을 사용한다.

// API 디자인을 구현해보자
class LocalStorage<T>{
  private storage:SStorage<T> = {}
  set(key:string, value:T){
    this.storage[key] = value;
  }
  remove(key:string){
    delete this.storage[key]
  }
  get(key:string):T { // get을 사용하면 string을 보내주고 T를 받는다고 적혀 있다.
    return this.storage[key]
  }
  clear(){
    this.storage = {}
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get('whatever')
stringStorage.set('hello', 'hi')

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.get('xxx')
booleanStorage.set('xxx', true)