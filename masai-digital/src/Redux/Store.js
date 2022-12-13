import thunk from 'redux-thunk';
import productReducer from './products/reducer';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';


const rootReducer = combineReducers({
    product: productReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);