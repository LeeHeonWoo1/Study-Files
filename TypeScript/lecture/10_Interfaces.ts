// 원래 작성하던 것 처럼 concrete type으로 타입을 지정할 수 있지만 concrete type의 세세한 값으로도 타입을 지정할 수 있다. 아래의 경우 Team이라는 속성은 'red', 'blue, 'yellow'라는 문자열이 아니면 올 수 없다.
type Team = 'red'|'blue'|'yellow';
type HealthBar = 1|5|10

// interface ? : 내가 원하는 메소드와 property를 클래스가 가지도록 강제성을 갖게끔 한다. => 추상클래스와 비슷한 보호환경을 제공하지만 JS파일에서는 보이지 않는다는 것이 특징.
// interface를 지정하는 방법은 type으로 타입을 지정하던 방법과 동일하지만 약간의 차이점은 분명히 존재한다. 우선 interface라는 선언구를 작성하고 할당변수(=)를 없앤다.
interface someInfo {
  nickname:string,
  team:Team,
  healthBar:HealthBar
}

type someInfo2 = {
  nickname:string,
  team:Team,
  healthBar:HealthBar
}
/* 
위, 아래 둘 다 오브젝트의 모양을 알려주고 있다.
사실 위의 interface와 아래의 type을 비교해봤을 때 다를건 없어보인다. 
하지만 interface보단 type이 좀 더 쓰임이 많다는 것을 기억하자.
*/

const lee:someInfo = {
  nickname:'lhw',
  team:'yellow', // team에 pink라는 문자열을 할당하면 오류가 나는 모습을 확인할 수 있다.
  healthBar:5
}

// interface와 type의 다른점을 꼽아보자면 interface는 타입을 축적시킬 수 있다는건데, 아래처럼 User1이라는 동일한 이름의 interface에 name, lastName, firstName을 따로 할당하고 아래에서 User1을 상속받아 인스턴스를 정의하면 name, lastName, firstName을 모두 할당할 수 있다.
interface User1 {
  name:string
}

interface User1{
  lastName:string
}

interface User1{
  firstName:string
}

interface Player7 extends User1{
}

const nico2 : Player7 = {
  name:'nico',
  lastName:'las',
  firstName:'nicol'
}