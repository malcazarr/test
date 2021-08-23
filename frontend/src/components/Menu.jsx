import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setLogout } from '../redux/asyncActions/authAsyncActions';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';



function Menu(){
    console.warn("render menu")
    const auth = useSelector(state => state.authReducer)
    const [click, setClick] = useState(null)

    useEffect(() =>{
        document.title = 'You clicked on ' + click +' button';
    })

    const handleClick = (event) =>{
        setClick(event.target.href)
    }
    const dispatch = useDispatch()
    const handleLogout= ()=>{
        dispatch(setLogout())
    }
    
    
    const renderMenu = () =>{
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to={'/'} activeClassName ="active" className="nav-link" onClick={handleClick}>Home</NavLink>
                        </li>
                       {!auth.auth && (
                            <li className="nav-item active">
                                <NavLink to={'/login'} activeClassName ="active" className="nav-link" onClick={handleClick}>Login</NavLink>
                            </li>
                       )}
                       {auth.auth && (
                            <li className="nav-item active">
                                <NavLink to={'/login'} activeClassName ="active" className="nav-link" onClick={handleLogout}>Logout</NavLink>
                            </li>
                       )}
                        <li className="nav-item">
                            <NavLink to={'/register'} activeClassName ="active" className="nav-link" onClick={handleClick}>Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/chat'} activeClassName ="active" className="nav-link" onClick={handleClick}>Chat</NavLink>
                        </li>
                    </ul>
                </div>
                <Profile/>
            </nav>
        )        
    }
    return renderMenu()
}
export default Menu;