import { createStore } from 'redux';
import rootReducer from '../_reducers/index'

// 스토어 생성
const store = createStore(rootReducer);

export default store;