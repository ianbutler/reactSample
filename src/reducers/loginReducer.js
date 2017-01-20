import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.user, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS action.userData", action.userData);
            return Object.assign({}, action.userData);
        default:
            return state;
    }
}
