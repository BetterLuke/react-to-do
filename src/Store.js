import { createStore, combineReducers, applyMiddleware, composeß} from "redux"
import {reducer as todoReducer} from './todos'
import {reducer as filterReducer} from './filter'
import Perf from 'react-addons-perf'

const win = window

win.Perf = Perf

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default createStore(reducer);