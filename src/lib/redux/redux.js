// 출저 https://lunit.gitbook.io/redux-in-korean/introduction/motivation

// redux
// javascript app 을 위한 예측가능한 상태 컨테이너. Redux Framework라고 있는데 이건 다른거

// redux 사용여부에 대해 고려할 점

/*
1. 시간에 따라 바뀌는 충분한 양의 데이터가 있다.
2. 상태를 위한 단 하나의 원천이 필요하다.
3. 모든 상태를 가지고 있기에 최상위 상태는 더 이상 적당하지 않다. -> 상위 상태가 필요한 경우 적당치 않다는 소리
*/

// reducer의 조건
/*
순수한 함수여야 한다.
순수한 함수?
1. 이전 상태와 action 객체를 parameter 로 받는다.
2. 이전 상태를 절대 건드리지 않고 변화를 일으킨 새로운 상태 객체를 만들어서 반환한다.
3. 똑같은 param으로 호출된 reducer는 언제나 똑같은 결과를 반환해야 한다.
*/

// react에서 redux를 사용하기위해 필요한 lib
/*
1. redux
2. react-redux
3.
*/