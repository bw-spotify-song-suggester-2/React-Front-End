import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="nav-container">
           <NavLink to='/'>Home </NavLink>
           <NavLink to="/">Sign-In </NavLink>
           <NavLink to='/'>Register </NavLink>
        </div>
    )
}

export default Navigation;
