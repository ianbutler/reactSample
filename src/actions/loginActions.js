import * as types from './actionTypes';
import LoginApi from '../api/loginApi';

// action creators
function loginSuccess(user){
    console.log("loginSuccess()", user)
    return {
        type: types.LOGIN_SUCCESS,
        userData: user
    };
}


// thunks
export function login(userData) {
    return dispatch => {
        return LoginApi.verifyUser(userData).then(data => {
            dispatch(loginSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}
