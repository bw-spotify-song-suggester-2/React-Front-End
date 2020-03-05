import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = (credentials, history) => dispatch => {
    dispatch({ type: LOGIN_START });
    
    axiosWithAuth()
    .post('/auth/login', credentials)
            .then(res => {
                setTimeout(() => {
                    localStorage.setItem('token', res.data.token);
                    dispatch({ type: LOGIN_SUCCESS });
                    history.push('/dashboard');
                    console.log('Data: ', res);
                }, 1000)
            })
            .catch(err => {
                localStorage.removeItem('token');
                dispatch({ type: LOGIN_ERROR })
                console.log('Problem Logging in: ', err)
            });
}

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signUp = (credentials, history) => dispatch => {
    dispatch({ type: SIGNUP_START });
    
    axiosWithAuth()
    .post('https://spotify-song-suggester-neo.herokuapp.com/api/auth/register', credentials)
    .then(res => {
        console.log('Successful Register: ', res);
        dispatch({ type: SIGNUP_SUCCESS });
        history.push('/login');
    })
    .catch(err => {
        dispatch({ type: SIGNUP_ERROR });
        console.log('Error Registering User: ', err);
    })
}

export const FETCH_RECS = 'FETCH_RECS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchRecs = () => dispatch => {
    dispatch({ type: FETCH_RECS });

    axiosWithAuth()
        .get('https://spotify-song-suggester-neo.herokuapp.com/api/recommendations/1/recs')
        .then(res => {
            console.log('Recommendations Successfuly Loaded: ', res.data)
            setTimeout(() => {
                dispatch({ type: FETCH_SUCCESS, payload: res.data });
            }, 1000)
        })
        .catch(err => {
            console.log('Error fetching Recs: ', err);
            dispatch({ type: FETCH_ERROR });
        })
}