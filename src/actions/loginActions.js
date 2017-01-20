import * as types from './actionTypes';
import LoginApi from '../api/loginApi';

// action creators
function loginSuccess(user){
    return {
        type: types.LOGIN_SUCCESS,
        userData: user
    };
}

function logoutSuccess(){
    return {
        type: types.LOGOUT_SUCCESS
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

export function logout() {
    return dispatch => {
        return LoginApi.logout().then(data => {
            dispatch(logoutSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}
