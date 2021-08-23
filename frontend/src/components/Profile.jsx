import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileImage from '../images/profile.png'; 

function auth(userAuth){

    
    if (userAuth.auth){
        return (
            <div className="dropdown">
                <div className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>{userAuth.data.name}</span>
                    <img src={ProfileImage}  alt=""  width="50px"/>
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to={'/profile'} activeClassName ="active" className="nav-link">Profile</NavLink>
                    <NavLink to={'/settings'} activeClassName ="active" className="nav-link">Settings</NavLink>
                    <NavLink to={'/logout'}  className="nav-link">Logout</NavLink>
                </div>
            </div>
        )
    }else{
        return (
            <></>
            );
        }
    }
    
    
    
    function Profile(){
        console.warn("render profile")
        const userAuth = useSelector(state =>state.authReducer) 
        return auth(userAuth)
    }
export default Profile;