import React from 'react';
import FriendStatus from '../components/FriendStatus';
import FriendListItem from '../components/FriendListItem';
import { useSelector } from 'react-redux';
import { getUserList } from '../redux/asyncActions/userAsyncAction';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function Chat({ usersData, fetchUsers }){
    console.warn("render chat")
    const user = useSelector(state => state.authReducer)

    useEffect(() =>{
        fetchUsers()
    },[fetchUsers])

    
    const handleChangeStatus = async() =>{
        //console.log(user)
        //let responseUsers = await ApiGet("/users")
        //setUser(Object.assign({},responseUsers[0],{online: true}))
        //setUsers(responseUsers)
    }
    
    if (usersData.data !== null){
        return (
            <>
                <div>
                    <FriendStatus friend={user}></FriendStatus>
                    <ul>
                        { usersData.data.map(userFromUsers =>{
                            return(
                                <FriendListItem key={userFromUsers.id} friend={userFromUsers}></FriendListItem>
                            )
                        })}
                    </ul>
                </div>
    
                <div>
                    <button onClick={handleChangeStatus}>Change status</button>
                </div>
            </>
        )
    }else{
        return(
            <>
            <div>
                <button onClick={handleChangeStatus}>Change status</button>
            </div>
            </>
        )
    }




}

const mapStateToProps = state =>{
    return {
        usersData : state.userReducer
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers : () => dispatch(getUserList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);