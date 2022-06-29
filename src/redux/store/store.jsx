import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { EjercisioReducers } from "../reducers/EjercisioReducers";
import { loginReducers } from "../reducers/login.reducers";
import { userReducer } from "../reducers/user.reducer";
// hola esto es una pruba y no tiene que ver con el codigo 

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers= combineReducers({
    Ejercisios: EjercisioReducers,
    login: loginReducers,
    user: userReducer,
});
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);