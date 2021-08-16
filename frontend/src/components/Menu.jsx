import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

function Menu(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to={'/'} activeClassName ="active" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to={'/login'} activeClassName ="active" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/register'} activeClassName ="active" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
            <Profile/>
        </nav>
    )
}
export default Menu;