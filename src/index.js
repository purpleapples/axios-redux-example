import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore } from 'redux';
import rootReducer from './store/modules';


// store 생성
// store는 app의 시작부에 딱 한번만 만들것
const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(<APP />, document.getElementById('root'));

