import { USER_LOGIN, USER_LOGOUT, USER_START_LOGIN, AUTH_ERROR } from "./actionTypes"


export const startLogin =() =>{
    return {
        type: USER_START_LOGIN
    }
}

export const login = (data) =>{
    return {
        type: USER_LOGIN,
        data: data
    }
} 

export const logout = () =>{
    return {
        type: USER_LOGOUT
    }
}

export const loginError = (error)=>{
    return {
        type: AUTH_ERROR,
        error: error
    }
}