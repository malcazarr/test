import axios from "axios"
import { API_URL, GET_AUTH_USER } from "../../services/Endpoints"
import { login, startLogin, loginError, logout } from "../actions/authActions"


export const setLogin = (data) =>{
    return (dispatch) => {
        dispatch(startLogin())
        axios.get(API_URL + GET_AUTH_USER)
        .then(data => {
            dispatch(login(data.data))
        })
        .catch(error => {
            dispatch( loginError(error.message))
        })
    }
}

export const setLogout = () =>{
    return (dispatch) => {
        dispatch(startLogin())
        axios.get(API_URL + GET_AUTH_USER)
        .then(data => {
            dispatch(logout(data.data))
        })
        .catch(error => {
            dispatch( loginError(error.message))
        })
    }
}