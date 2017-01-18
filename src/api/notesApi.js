import delay from './delay';

const notes = [
    "preloaded note 1"
];

class NotesApi {
    static getAllNotes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], notes));
            }, delay);
        });
    }

    static saveNote(note) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                notes.push(note);
                console.log("notes in saveNote promise:", notes);
                resolve(note);
            }, delay);
        });
    }

    static deleteNote(note) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexToDelete = notes.indexOf(note);
                notes.splice(indexToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default NotesApi;
