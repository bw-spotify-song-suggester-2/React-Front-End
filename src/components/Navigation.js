import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { connect } from 'react-redux';
import Brand from "./Brand";

const Navigationbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  const logOut = e => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    window.location.reload(false);
  }

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
            {props.loggedIn? (<button onClick={logOut}>Log Out</button>) : (
              <NavLinks style={linkAnimation}>
                <a href="https://bw-spotify-song-suggester-2.github.io/Marketing-page/">Home </a>
                <a href="/login">Sign-In</a>
                <a href="/signup">Register</a>
              </NavLinks>
            )}
        </FlexContainer>
      </NavBar>
   </>
  )
}

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: black;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: green;
      border-bottom: 1px solid green;
    }
  }
`;

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(mapStateToProps, {})(Navigationbar)