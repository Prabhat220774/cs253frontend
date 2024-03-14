import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import './navbar.css';
function NavBar() {
    const location = useLocation();
    document.documentElement.style.setProperty('--heading-color', 'white');

    return (
        <>
            <div className="nav">
                <div className="heading">
                    <img className="logo" src="images/iitk.gif" alt="" />
                    <h1 >ProfInfo Central</h1>
                </div>
                <ul>
                    <li><NavLink className={`a ${location.pathname === '/Logout' && 'active'}`} to="/Logout">Logout</NavLink></li>
                    {/* <li><NavLink className={`a ${location.pathname === '/History' && 'active'}`} to="/History">Project History</NavLink></li> */}
                    <li><NavLink className={`a ${location.pathname === '/Profile' && 'active'}`} to="/Profile">My Profile</NavLink></li>
                    {/* <li><NavLink className={`a ${location.pathname === '/Login' && 'active'}`} to="/Login">Log in</NavLink></li> */}
                    <li><NavLink className={`a ${location.pathname === '/Faculty' && 'active'}`} to="/Faculty">Faculty</NavLink></li>
                    <li><NavLink className={`a ${location.pathname === '/About' && 'active'}`} to="/About">About Us</NavLink></li>
                    <li><NavLink className={`a ${location.pathname === '/Student' && 'active'}`} to="/Student">Projects</NavLink></li>
                    <li><NavLink className={`a ${location.pathname === '/' && 'active'}`} exact to="/">Home</NavLink></li>
                    
                </ul>
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;
