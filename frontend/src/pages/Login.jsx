import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setLogin, setLogout } from '../redux/asyncActions/authAsyncActions';
import './css/Login.css'
import logo from './images/R.gif'



function Login({auth, login, logout}) {
    console.log("RENDER LOGIN")
    console.log(auth)

    const setLogin = () =>{
        console.log("Doing Login")
        login({username: "admin", password: "123456"})        
       
        /* if (stateAppReducer.status.authenticated === true){
            console.log("REDIRECCIONANDO")
            return <Redirect to="/home" />
        } */
    }

    const setLogout = () =>{
        logout()
    }

    useEffect(() =>{
        console.log("EFFECT")
        console.log(auth)
    })

    

   if (!auth.auth){
    return ( 
        <div>
            <div styles={{ backgroundImage:`url(${logo})`}}></div>
            <div className="">
                <div className="card card-login">
                        <div className="pt-2">
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="pt-2">
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div className="text-right">
                            <a href="/forgot_password"className="mr-1"><small>Forgot password?</small></a>
                        </div>
                        {!auth.auth && (
                            <div className="pt-2">
                                <button className="btn btn-signin" onClick={setLogin}>Sign in</button>
                            </div>
                        )}
                        { auth.auth && (
                            <div className="pt-2">
                                <button className="btn btn-signin" onClick={setLogout}>Logout</button>
                            </div>
                        )}
                </div>
            </div>
        </div>
        )
   }else{
    return <Redirect to="/home" />
   }
}

    const mapStateToProps = state =>{
        return {
            auth : state.authReducer
        }
    }
    const mapDispatchToProps = dispatch =>{
        return {
            login : (data) => dispatch(setLogin(data)),
            logout : () => dispatch(setLogout())
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Login);
