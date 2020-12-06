import {combineReducers} from 'redux';
import counter from './counter';

export default combineReducers({
    counter,
    // 다른 reducer가 있다면 추가
});

// src/index.js 에서 계속



