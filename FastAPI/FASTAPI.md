### 왜 Fast API인가?
- 이름에서 부터 알 수 있다. 빠르고 NodeJS 및 Go와 대등할 정도로 매우 높은 성능을 가진 파이썬 프레임워크 중 하나이다.
- 아직도 Flask를 쓰나? 하는 소리가 나올정도로 크게 자리잡고 있다.
- 버그가 적다. 개발자에 의한 에러가 약 40%가량 감소된다는 통계도 있는 정도.
- 직관적이다. 훌륭한 편집기 지원도 마찬가지, 모든 곳에서 자동완성이 지원되고 디버깅 시간이 적다.
- 무엇보다도 쉽다. 쉽게 시용하고 문서를 들여다봐야 하는 시간을 적게끔 설계해두었다.
- 코드의 중복성을 최소화하고, 각 매개변수 선언의 여러기능 등을 통해 코드가 짧아진다.
***
우선 아래의 명령어로 install 한다
#### fast api설치
$pip install fastapi

#### Uvicorn(ASGI서버) 설치
$pip install uvicorn[standard]