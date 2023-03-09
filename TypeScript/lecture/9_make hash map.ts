type Words = {
  [key:string]: string // 키:값의 형태가 string으로 구성되어야한다.
}

let dict:Words = {
  'potato':'food'
}

class Dict{
    private words: Words // word의 타입은 Words인데, 위를 보면
    constructor(){
      this.words = {} // dict를 만들때 비어있는 사전 형태를 하나 만들고
    }
    add(word:Word){ // 추가할 때 Word의 타입을 유지하면서 추가한다
      if(this.words[word.term]===undefined){ // 만약에 정의되지 않은것이라면
        this.words[word.term] = word.def; // 
      }
    }
    def(term:string){
      return this.words[term]
    }
    static hello(){
      return 'hello!'
    }
}

class Word{
  constructor(
    public term:string,
    public def:string
  ){}
}

const kimchi = new Word('kimchi', '한국의 음식')
const dict1 = new Dict()

dict1.add(kimchi);
console.log(Dict.hello()) // 이런 방식으로 호출할때는 충분히 호출이 잘 되지만
// console.log(dict1.hello()) // 인스턴스의 이름으로 불러 호출할때는 오류가 발생한다.