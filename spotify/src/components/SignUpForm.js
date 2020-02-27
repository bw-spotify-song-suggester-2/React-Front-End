import React, { useState } from 'react';

const SignUpForm = props => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    })

    const handleChange = e => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('New User: ', newUser)
        
        // Post Call Will Eventually go here once BackEnd is Set Up

        setNewUser({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
        })
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

export default SignUpForm;