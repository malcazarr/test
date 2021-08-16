import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileImage from '../images/profile.png'; 

function auth(state){
     if (state.state.show){
         return (
            <div className="dropdown">
                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={ProfileImage}  alt=""  width="50px"/>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to={'/profile'} activeClassName ="active" className="nav-link">Profile</Link>
                    <Link to={'/settings'} activeClassName ="active" className="nav-link">Settings</Link>
                    <Link to={'/logout'}  className="nav-link">Logout</Link>
                </div>
            </div>
        )
    }else{
        return (
            <div>{state.state.show}</div>
        );
    }
}



function Profile(){
    const state = useSelector(state => state.components.filter(component => component.id === 1))
    return auth(state[0])
}
export default Profile;