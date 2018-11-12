import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducers from './reducers/AuthReducer';

const rootReducer = combineReducers({
    auth: loginReducers
});

let composeEnchancers = compose;

if (__DEV__) {
    composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnchancers(
        applyMiddleware(thunk)
    ));
};

export default configureStore;
