import { API_URL, GET_USERS } from "../../services/Endpoints";
import { getUserListStarted, getUserListSuccess, getUserListFailed } from "../actions/userActions";
import axios from 'axios';


export const getUserList  = () => {
    return (dispatch) => {
        dispatch(getUserListStarted())
        axios.get(API_URL + GET_USERS)
        .then(data => {
            dispatch(getUserListSuccess(data.data))
        })
        .catch(error => {
            dispatch(getUserListFailed(error.message))
        })
    }
}