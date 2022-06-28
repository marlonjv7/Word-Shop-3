import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { EjercisioReducers } from "../reducers/EjercisioReducers";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers= combineReducers({
    Ejercisios: EjercisioReducers,

});
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

);