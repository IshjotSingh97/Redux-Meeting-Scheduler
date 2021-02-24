import { combineReducers, createStore } from 'redux'
import { reducer } from './reducers'

const combinedReducers = combineReducers({ meetings: reducer })
const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export { store }