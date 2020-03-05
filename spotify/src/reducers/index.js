import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    FETCH_RECS,
    FETCH_SUCCESS,
    FETCH_ERROR,
} from '../actions';

const initialState = {
    username: '',
    password: '',
    loggingIn: false,
    signingUp: false,
    fetching: false,
    error: false,
    errorMssg: '',
    recs: []
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case LOGIN_START:
                return {
                    ...state, loggingIn: true, error: false
                };
            case LOGIN_SUCCESS:
                return {
                    ...state, loggingIn: false
                };
            case LOGIN_ERROR:
                return {
                    ...state, loggingIn: false, error: true, errorMssg: 'Invalid Login'
                };
            case FETCH_RECS:
                return {
                    ...state, fetching: true 
                };
            case FETCH_SUCCESS:
                return {
                    ...state, recs: action.payload
                }
            case FETCH_ERROR:
                return {
                    ...state, error: true, errorMssg: 'Error Retrieving Recommendations'
                }
            default:
                return state;
        }
}

export default reducer;