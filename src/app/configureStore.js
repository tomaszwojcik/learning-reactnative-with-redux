import { createStore, combineReducers, compose } from 'redux';
import loginReducers from './reducers/Login';

const rootReducer = combineReducers({
    login: loginReducers
});

let composeEnchancers = compose;

if (__DEV__) {
    composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnchancers());
};

export default configureStore;
