import { useEffect } from "react";
import { useSelector } from "react-redux";

function FriendStatus(props){
    console.warn("render friendstatus")
    
    const auth = useSelector(state => state.authReducer)
    if (auth.loading){
        return 'Loading...'
    }
    return auth.auth ? auth.data.name + ' is Online': null
}

export default FriendStatus;