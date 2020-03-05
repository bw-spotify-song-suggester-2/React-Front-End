import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledNav = styled.div`
    display: flex;
    color: white;
    padding: 1.5%;
    width: 100%;
    justify-content: space-around;
    background-color: green;
`


const Navigation = () => {
    return (
        <StyledNav>
            <h3>Spotify Song Suggester</h3>
           <NavLink to='/'>Home </NavLink>
           <NavLink to="/login">Sign-In </NavLink>
           <NavLink to='/signup'>Register </NavLink>
        </StyledNav>
    )
}

export default Navigation;
