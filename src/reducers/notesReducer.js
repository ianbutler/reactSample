import * as types from '../actions/actionTypes';
import initialState from './initialState';

let stateForUse = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : initialState;
console.log('stateForUse', stateForUse);
export default function notesReducer(state = stateForUse.notesReducer, action) {
    debugger;
    switch (action.type) {
        case types.ADD_NOTE_SUCCESS:
            return [
                ...state,
                action.note
            ];
        case types.LOAD_NOTES_SUCCESS:
            return action.notes;
        case types.DELETE_NOTE_SUCCESS:
            return [...action.notes];
        default:
            return state;
    }
}
