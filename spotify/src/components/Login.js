import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const Login = props => {
    return(
        <StyledDiv>
            <LoginForm props={props} />
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    padding: 4.5%;
`

export default Login;