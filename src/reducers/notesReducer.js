import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function notesReducer(state = initialState.notes, action) {
    switch (action.type) {
        case types.ADD_NOTE_SUCCESS:
            return [
                ...state,
                action.note
            ];
        case types.LOAD_NOTES_SUCCESS:
            return action.notes;
        case types.DELETE_NOTE_SUCCESS:
            debugger;
            return [...action.notes];
        default:
            return state;
    }
}
