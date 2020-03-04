import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
} from '../actions';

const initialState = {
    username: '',
    password: '',
    loggingIn: false,
    signingUp: false,
    error: '',
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case LOGIN_START:
                return {
                    ...state, loggingIn: true
                };
            case LOGIN_SUCCESS:
                return {
                    ...state, loggingIn: false
                };
            case LOGIN_ERROR:
                return {
                    ...state, loggingIn: false, error: 'Invalid Login'
                };
            default:
                return state;
        }
}

export default reducer;