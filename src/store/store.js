import {createStore, combineReducers,applyMiddleware} from 'redux';
import * as production from './production/reducer';
import * as home from './home/reducer'
import thunk from 'redux-thunk'
let store = createStore(
    combineReducers({...production,...home}),
    applyMiddleware(thunk)
);

export default store;