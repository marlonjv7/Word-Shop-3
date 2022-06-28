import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/login.reducers";
import { userReducer } from "../reducers/user.reducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    user: userReducer,
});

export const Store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);