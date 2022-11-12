import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./MainAuth/AuthReducer";
const rootReducer = combineReducers({
    auth: AuthReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
