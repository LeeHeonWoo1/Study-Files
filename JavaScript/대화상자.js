// prompt : python의 input과 같은 문법. 잘 쓰지 않는다(css적용할수 없고, 다른 문서 로딩을 멈추게 한다.)
// 알림창이 뜨면서 안에 글자를 입력할 수 있게된다.
// prompt(title, [default]); 식으로 두 개의 인수를 받는다.
// 대괄호 : default는 이 매개변수가 필수가 아닌 선택값이라는 것을 의미한다.
// Internet Explorer에서는 항상 기본값이 들어가있어야 한다. 이외의 브라우저에서는 대괄호는 선택사항이다.
let age = prompt('당신의 나이는?', 100);

alert(`당신의 나이는 ${age}살 입니다.`)

// 컨펌 대화상자 : result=confirm(question);
// 매개변수로 받은 question(질문)과 확인 및 취소 버튼이 있는 창을 보여준다. 사용자가 확인을 누르면 true, 그 외의 경우에는 false를 반환한다.

let areYouBoss = confirm('당신이 보스입니까?')
alert(areYouBoss) // 확인 버튼을 눌렀다면 true가 반환된다.

// 예제 : 사용자에게 이름을 물어보고, 입력받은 이름 그대로를 출력해주는 페이지 만들기
let whatIsYourName = prompt('당신의 이름은 무엇입니까?', '');
alert(`당신의 이름은 ${whatIsYourName}입니다.`)