import { combineReducers } from "redux";
import appReducer from "./appReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

export default combineReducers({
    appReducer,
    userReducer,
    authReducer
})