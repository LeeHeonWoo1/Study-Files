// 문자형으로의 변환
// alert메소드는 매개변수로 문자형을 받기 때문에, alert(value)에서 value는 문자형이어야 한다. 만약 다른 형의 값을 전달받으면 이 값은 문자형으로 자동 변환된다.
// String함수를 호출해 문자열로 변환할 수도 있다.
let value = true;
alert(typeof(value));

value = String(value);
alert(typeof(value));

// 숫자형으로의 변환
// 숫자형으로의 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어난다.
// 숫자형이 아닌 값에 나누기를 적용한 경우와 같이.
alert('6'/'2');

// Number함수를 사용하면 주어진 값을 숫자형으로 명시해서 변환할 수 있다.
let str = '123';
alert(typeof(str));

str = Number(str);
alert(typeof(str));

// boolean으로의 변환
// 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 '비어있다'고 느껴지는 값들은 false가 된다. 그 외의 값들은 true로 반환된다
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean(null)); // false
alert(Boolean(NaN)); // false
alert(Boolean(4)) // true
// 하지만 위에서 언급한 비어있다고 느껴지는 값들도 문자열 안에 감싸게 되면 그는 true로 출력된다.
