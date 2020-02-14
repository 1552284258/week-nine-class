import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'; // 可以让 dispatch接收函数
import * as reducers from './reducers';

let store = createStore(combineReducers({
    ...reducers
}),applyMiddleware(reduxThunk)) //使用中间件
console.log(store.getState())
export default store