import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav-container">
           <NavLink to='/'>Home </NavLink>
           <NavLink to="/login">Sign-In </NavLink>
           <NavLink to='/signup'>Register </NavLink>
        </div>
    )
}

export default Navigation;
