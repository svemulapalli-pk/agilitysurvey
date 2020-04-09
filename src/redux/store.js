import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const history = require("history").createBrowserHistory();
const middleware = [routerMiddleware(history)];
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {}

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState, 
        composedEnhancers(applyMiddleware(reduxImmutableStateInvariant(), thunk, ...middleware))
    );
}
