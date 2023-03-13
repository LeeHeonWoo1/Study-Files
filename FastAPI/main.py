from typing import Union
from enum import Enum
from fastapi import FastAPI

# str이라는 클래스를 상속받아 클래스 안의 인스턴스들은 문자열 형태임을 명시
class ModelName(str, Enum):
  alexnet = "alexnet"
  resnet = "resnet"
  lenet = "lenet"

# route name으로 객체 생성
app = FastAPI()

# 경로("/")와 동작(get, post, delete, put), 함수를 선언
# 일반 함수로 정의해도 되지만 async로 정의하는 이유는 await로 변수를 선언하는 타 라이브러리를 사용하는 경우에 async함수 안에 한정해서 선언할 수 있기 때문이다.
# 하지만 굳이 상관하지않고 def 앞에도 async를 붙이지 않고, 변수 정의부분 앞쪽에도 await를 붙이지 않으면 상관이 없다.
@app.get('/')
async def read_root():
  return {"Hello":"World!"}

# 경로에 매개변수 또는 변수를 선언할 수 있다.
# 중괄호로 prop을 read_item이라는 함수에 전달하는 것이다. 타입 선언 또한 가능한데, 함수의 매개변수에 지정해줄 수 있다.
# 또한 기본값을 None으로 설정하여 선택적으로 매개변수를 선택할 수 있다
@app.get('/items/{item_id}')
def read_item(item_id:int, q: Union[None, str]=None):
  if q:
    return {"item_id":item_id, "q":q}
  return {"item_id": item_id}

# 경로 동작에 있어서 고정경로를 갖고 있는 상황이 생길 수 있다.
# 예를 들어서, /users/me처럼 현재 사용자의 데이터를 가져온다고 가정하자. 하지만, 사용자의 ID를 이용해 특정 사용자의 정보를 가져오는 경로인 /users/{user_id}도 있다면?
# 결론은, 경로 동작은 위에서 아래로 순차적으로 진행하기에 먼저 선언해야 하는것들이 항상 위에 위치해야 한다. 아래의 예시를 살펴보자
@app.get('/users/me')
async def read_user_me():
  return {"user_id":"the current user"}

# user_id로 전달하려는 props의 값이 위의 함수와 동일한 me라면, 현재 유저에 대한 정보는 가져오지 못하고 계속 me라는 정보만 얻게 될 것이다.
@app.get('/users/{user_id}')
async def read_user(user_id:str):
  return {"user_id":user_id}

# 사전정의 값
# 만약 경로 매개변수를 받는 경로 동작이 있지만, 유효하고 미리 정의할 수 있는 경로 매개변수 값을 우너한다면 파이썬 표준 Enum을 사용할 수 있다.
# Enum을 import하고 상단부에 클래스를 만든다
@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
  if model_name is ModelName.alexnet:
    return {"model_name": model_name, "message":"One kind of Deep Learning Model"}
  
  if model_name.value == 'lenet':
    return {"model_name":model_name, "message":"LeCNN all the images"}
  
  return {"model_name":model_name, "message":"Have some residuals"}

# 매개변수를 경로로 준다면?
# pdf파일의 경로를 보면 /~~~~/test.pdf식으로 되어있는 것을 볼 수 있다.
# starlette에서 직접 옵션을 사용하면 다음과 같은 url을 사용하여 path를 포함하는 경로 매개변수를 선언할 수 있다.
@app.get('/files/{file_path:path}')
async def read_file(file_path:str):
  return {"file_path":file_path}
# 여기서 경로 안의 :path는 매개변수와 경로가 일치해야함을 알려준다.

# 쿼리 매개변수
# 경로 매개변수의 일부가 아닌 다른 함수 매개변수를 선언할 때, "쿼리"매개변수로 자동 해석한다
fake_items = [{"item_name":"foo"}, {"item_name":"Bar"}, {"item_name":"Baz"}]

@app.get('/items/')
async def read_items2(skip:int=0, limit:int=10):
  return fake_items[skip:skip+limit]
