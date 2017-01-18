import * as types from './actionTypes';
import NotesApi from '../api/notesApi';

// action creators
function loadNotesSuccess(notes) {
    return {
        type: types.LOAD_NOTES_SUCCESS,
        notes
    };
}

function addNoteSuccess(note) {
    return {
        type: types.ADD_NOTE_SUCCESS,
        note
    };
}

function deleteNoteSuccess(notes) {
    return {
        type: types.DELETE_NOTE_SUCCESS,
        notes
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

export function deleteNote(noteToDelete) {
    return dispatch => {
        return NotesApi.deleteNote(noteToDelete).then(notes => {
            dispatch(deleteNoteSuccess(notes));
        });
    };
}
