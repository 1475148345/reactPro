import { createStore,applyMiddleware } from 'redux'
import reducer from '../reducer/reducerIndex'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger()
const store = createStore(reducer,applyMiddleware(
    thunkMiddleware,// 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
))
export default store