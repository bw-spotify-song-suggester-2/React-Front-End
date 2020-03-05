import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions';

const SignUpForm = props => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = e => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.signUp(newUser, props.history)
    }

    return (
        <div className='signupContainer'>
            <form className='signupForm' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <input 
                type='text'
                name='firstName'
                placeholder='First Name'
                onChange={handleChange}
                value={newUser.firstName}
                />
                <input 
                type='text'
                name='lastName'
                placeholder='Last Name'
                onChange={handleChange}
                value={newUser.lastName}
                />
                <input 
                type='text'
                name='username'
                placeholder='Username'
                onChange={handleChange}
                value={newUser.username}
                />
                <input 
                type='text'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                value={newUser.email}
                />
                <input 
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange}
                value={newUser.password}
                />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    
})

export default connect(mapStateToProps, {signUp})(SignUpForm);