const quotes = [
  {quote:'삶이 있는 한 희망은 있다.',
    author:'키케로'},
  {quote:'피할 수 없으면 즐겨라.',
    author:'로버트 엘리엇'},
  {quote:'한 번의 실패와 영원한 실패를 혼동하지 마라.',
    author:'F.스콧 핏제랄드'},
  {quote:'계단을 밟아야 계단 위에 올라설 수 있다.',
    author:'터키 속담'},
  {quote:'자신감 있는 표정을 지으면 자신감이 생긴다.',
    author:'찰스 다윈'},
  {quote:'1퍼센트의 가능성, 그것이 나의 길이다.',
    author:'나폴레옹'},
  {quote:'꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.',
    author:'괴테'},
  {quote:'상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다.',
    author:'존 우든'},
  {quote:'추구할 수 있는 용기가 있다면 우리의 모든 꿈은 이뤄질 수 있다.',
    author:'월트 디즈니'},
  {quote:'열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.',
    author:'윈스턴 처칠'}
]
const q_length = quotes.length;
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuotes = quotes[Math.floor(Math.random()*q_length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;

