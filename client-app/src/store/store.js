import {createStore, combineReducers} from 'redux';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {compose} from 'redux';
import redactorReducer from './redactor-reducer';




let reducers=combineReducers({

    redactor:redactorReducer

})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;




export default store; 