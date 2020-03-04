import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//Redux Imports
import { connect } from 'react-redux';
import { login } from '../actions';

// const LoginForm = props => {
//     const [user, setUser] = useState({
//         username: '',
//         password: ''
//     })

//     const handleChange = e => {
//         setUser({ ...user, [e.target.name]: e.target.value})
//     }

//     const handleSubmit = e => {
//         e.preventDefault();
//         console.log('User: ', user)

//         setUser({
//             email: '',
//             password: ''
//         })
//     }

//     return (
//         <div className='loginContainer'>
//             <form className='loginForm' onSubmit={handleSubmit}>
//                 <h3>Log In</h3>
//                 <input
//                 type='text'
//                 name='username'
//                 placeholder="Username"
//                 onChange={handleChange}
//                 value={user.username}
//                 />
//                 <input
//                 type='password'
//                 name='password'
//                 placeholder="Password"
//                 onChange={handleChange}
//                 value={user.password}
//                 />
//                 <button>Log In</button>
//             </form>
//         </div>
//     )
// }

const LoginForm = ({ values, touched, errors}) => {
    const [user, setUser] = useState({
                username: '',
                password: ''
            })
            
    return (
        <div className="loginContainer">
            <h2>Login</h2>
            <h2>Please fill out the information below.</h2>
            <Form className="loginForm">
                
                    {touched.username && errors.username && (<p className="error">{errors.username}</p>)}
                    {touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                

                <Field type="text" name="username" placeholder="enter username" />
                <Field type="password" name="password" id="password" />

                <button type="submit">Login</button>
            </Form>
            <p>Don't have an account? <Link to="/signup"> click here to register</Link>.</p>
        </div>
    );
  };

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username field is required.'),

        password: Yup.string()
            .required('Password field is required.')

    }),

    handleSubmit(values, {resetForm, props, ...rest}){
        props.login(values, props.props.history)
    }
  })(LoginForm);

const mapStateToProps = state => ({
    loggingIn: state.loggingIn
})

const Connect = connect(mapStateToProps, { login })(FormikLoginForm);

export default Connect