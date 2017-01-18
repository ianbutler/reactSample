import * as types from './actionTypes';
import NotesApi from '../api/notesApi';

// action creators
export function loadNotesSuccess(notes) {
    return {
        type: types.LOAD_NOTES_SUCCESS,
        notes
    };
}

export function addNoteSuccess(note) {
    return {
        type: types.ADD_NOTE_SUCCESS,
        note
    };
}



//thunks
export function loadNotes() {
    return dispatch => {
        return NotesApi.getAllNotes().then(notes => {
            dispatch(loadNotesSuccess(notes));
        }).catch(error => {
            throw(error);
        });
    };
}

export function addNote(noteToAdd) {
    return dispatch => {
        return NotesApi.saveNote(noteToAdd).then(note => {
            dispatch(addNoteSuccess(note));
        }).catch(error => {
            throw(error);
        });
    };
}
