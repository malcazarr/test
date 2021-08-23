import { GET_USER_LIST_SUCCESS, GET_USER_LIST_STARTED, GET_USER_LIST_FAILED } from "../actions/actionTypes"

const initialState = {
    data: null,
    loading: true,
    error: null
}

export default function userReducer (state = initialState, action){
    switch(action.type){
        case GET_USER_LIST_STARTED:
            return {
                ...state,
                loading: true
            };
        case GET_USER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_USER_LIST_FAILED:
            return {
                ...state,
                loading:false,
                error: action.error
            };
        default:
            return state;
    }
}