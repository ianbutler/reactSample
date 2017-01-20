import * as types from '../actions/actionTypes';
import initialState from './initialState';

let stateForUse = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initialState;

export default function loginReducer(state = stateForUse.loginReducer, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return Object.assign({}, action.userData);
        case types.LOGOUT_SUCCESS:
            localStorage.clear();
            return Object.assign(
                {},
                initialState.loginReducer
            );
        default:
            return state;
    }
}
