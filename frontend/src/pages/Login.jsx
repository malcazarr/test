import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './css/Login.css'
import logo from './images/R.gif'



function Login() {
    
    const state = useSelector(state => state.components.filter(component => component.id === 1));
    
    const dispatch =  useDispatch();

    const setLogin = () =>{
        console.log("Lanzando Login")
        console.log(state)
        dispatch({type: "TEST"})
    }
    return( 
        <div>
            <div styles={{ backgroundImage:`url(${logo})`}}></div>
            <div className="px-auto py-auto">
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
                        <div className="pt-2">
                            <button className="btn btn-signin" onClick={setLogin}>Sign in</button>
                        </div>
                </div>
            </div>
        </div>
        )
    }

export default Login;
