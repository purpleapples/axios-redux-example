# 리덕스 소개
[출저](https://velog.io/@velopert/Redux-1-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC-zxjlta8ywt)
## 리덕스 란?
- global 상태관리를 위한 lib
## redux 사용 필요 점검
- 기본적으로 react는 state를 관리하는 function과 state를 사용하는곳이 다를 경우 가 있는데 이게 복잡해지면 redux를 통해 관리한다.

## redux를 통한 상태관리
- store : app이 지닌 상태와 상태관리 function을 가지고 잇는 곳

## 용어
- Action : type field를 필수로 가지고 나머지는 자유롭게 설정가능하다.
```js
action = {type:"value" ,[...]}
``` 
- Action creator : action을 만드는 함수.

```js
function addTodo(data){
    return {
        type: "ADD_TODO",
        data
    }
}
```
- Reducer : 변화를 일으키는 함수. 두가지 parameter를 받아온다.

```js
 function reducer(state, action){
 // 상태 업데이트 로직
 return alteredState;
 }
```
- Store : redux에서는 한 app당 하나의 store를 만든다. 이 안에는 state, reducer와 추가적인 몇가지 built-in function들이 있다.
  
- dispatch: store의 내장함수중 하나 action을 발생시키는 것으로 reducer에 action을 전달 시키는 역할을 한다. 

- subscribe : store의 내장함수 중 하나로 함수 형태의 값을 parameter로 받아온다. subscribe에 특정 function을 전달해주면, action이 dispatch되었을 때마다 전달해준 function이 호출된다.
