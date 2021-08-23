import { GET_USER_LIST_SUCCESS, GET_USER_LIST_STARTED, GET_USER_LIST_FAILED } from "./actionTypes"

export const getUserListStarted=() =>{
    return {
        type: GET_USER_LIST_STARTED,
    }
}

export const getUserListSuccess = (data) =>{
    return {
        type: GET_USER_LIST_SUCCESS,
        payload: data
    }
}

export const getUserListFailed = (error) =>{
    return {
        type: GET_USER_LIST_FAILED,
        error: error
    }
}

