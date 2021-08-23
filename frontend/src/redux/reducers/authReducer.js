import { AUTH_ERROR, USER_LOGIN, USER_LOGOUT, USER_START_LOGIN } from "../actions/actionTypes"

const initialState ={
    data: null,
    loading: true,
    error: null,
    auth: false
}

export default function authReducer (state = initialState, action) {
    switch(action.type){
        case USER_START_LOGIN:
            return {
                ...state,
                loading: true
            }

        case USER_LOGIN:
            return{
                ...state,
                data: action.data,
                loading: false,
                auth: true
            }
        case USER_LOGOUT:
            return{
                ...state,
                data: null,
                loading: false,
                error: null,
                auth: false
            }
        case AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                auth: false,
            }
        default:
            return state
    }
}