// generic을 사용해서 추가정보를 만들자
type Player2<T>= {
  name:string
  extraInfo:T
}

// 추가정보에 대한 세세한 정보는 안의 favfood는 문자열이라는것
type NicoExtra = {
  favFood:string
}

// NicoPlayer는 Player2를 사용하되, generic은 위에서 만든 세세한 정보
type NicoPlayer = Player2<NicoExtra>

// 지정한 속성대로 이름은 문자열, extraInfo 안의 favfood또한 문자열.
const nico1 : NicoPlayer = {
  name:'nico',
  extraInfo:{
    favFood:'kimchi'
  }
};

// 속성을 지정하되, generic은 null타입으로 지정한다.
const lynn1 : Player2<null> = {
  name:'lynn',
  extraInfo:null
}