// parseInt(age) int로 바꾸는 구문
const age = parseInt(prompt('How old are you?'));

console.log(isNaN(age))

if(isNaN(age)){
  alert('숫자를 입력해주세요.');
}else if(age<18){
  console.log('미성년자 입니다.')
}else if(age>=18 && age<=50){ // and 연산자
  console.log('건강에 주의하여 음주하세요.')
}else if(age===100){  // equal 연산자(not equal = "!==")
  console.log('무병장수 하세요!')
}else if(age>=18 || age<=50){ // or 연산자
  console.log('건강에 주의하여 음주하세요1.') 
}else{
  console.log('음주가넝')
}