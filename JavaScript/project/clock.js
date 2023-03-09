const clock = document.querySelector('h2#clock')

function getClock(){
  const date = new Date() // 시간정보를 가지고 있는 객체
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);

// '1'.padStart(2, '0')
// padStart함수 앞의 문자열의 길이가 지정한 길이(2)보다 짧다면 문자열의 앞에 지정한 문자('0')를 삽입하게끔 해주는 함수
// padEnd는 padStrat와 작동원리는 같지만 문자열 삽입 위치가 다르다(뒤에 삽입)

