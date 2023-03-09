// call signature? : 함수에 마우스 커서를 올리면 나오는 정보를 이야기한다.
// ex) const add: (a: number, b: number) => number
const add = (a:number, b:number) => a+b

type Add = (a:number, b:number) => number;
const add1:Add = (a, b) => a + b
const add2:Add = function add2(a,b){return a+b}