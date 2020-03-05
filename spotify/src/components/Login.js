import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const Login = props => {
    return(
        <StyledDiv>
            <img className="loginImg" src='https://images.unsplash.com/photo-1495434942214-9b525bba74e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'></img>
            <LoginForm props={props} />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    border-top: 4px solid green;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: .5%;
    margin-top: 4.80%;
`

export default Login;