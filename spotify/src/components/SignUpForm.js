import React, { useState } from 'react';
import axios from 'axios';

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
        console.log('New User: ', newUser)
        axios
            .post('https://spotify-song-suggester-neo.herokuapp.com/api/auth/register', newUser)
            .then(res => {
                console.log('Successful Register: ', res);
                setNewUser({
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: ''
                })
            })
            .catch(err => {
                console.log('Error Registering User: ', err);
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