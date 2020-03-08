import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    FETCH_RECS,
    FETCH_SUCCESS,
    FETCH_ERROR,
    TRACK_RECS,
    TRACK_SUCCESS,
    TRACK_ERROR,
    CLEAR_START,
    CLEAR_SUCCESS,
    CLEAR_ERROR
} from '../actions';
import { act } from 'react-dom/test-utils';

const initialState = {
    username: '',
    password: '',
    user_id: '',
    loggingIn: false,
    signingUp: false,
    loggedIn: false,
    fetching: false,
    error: false,
    errorMssg: '',
    recs: [],
    similarRecs: [],
}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case LOGIN_START:
                return {
                    ...state, loggingIn: true, error: false, loggedIn: false,
                };
            case LOGIN_SUCCESS:
                return {
                    ...state, loggingIn: false, user_id: action.payload, loggedIn: true
                };
            case LOGIN_ERROR:
                return {
                    ...state, loggingIn: false, error: true, errorMssg: 'Invalid Login', loggedIn: false
                };
            case FETCH_RECS:
                return {
                    ...state, fetching: true , error: false, errorMssg: '', loggedIn: true
                };
            case FETCH_SUCCESS:
                return {
                    ...state, fetching: false, recs: action.payload
                }
            case FETCH_ERROR:
                return {
                    ...state, error: true, fetching: false, errorMssg: 'You have no recommendations. Submit a playlist link below to get started. '
                }
            case TRACK_RECS:
                return {
                    ...state, errorMssg: '', error: false, fetching: true
                }
            case TRACK_SUCCESS:
                return {
                    ...state, fetching: false, similarRecs: action.payload
                }
            case TRACK_ERROR:
                return {
                    ...state, fetching: false, errorMssg: 'Oh oh, there was a problem retrieving similar tracks'
                }
            case CLEAR_START:
                return {
                    ...state, fetching: true
                }
            case CLEAR_SUCCESS:
                return {
                    ...state, recs: action.payload
                }
            default:
                return state;
        }
}

export default reducer;