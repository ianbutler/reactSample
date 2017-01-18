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
        console.log("deleteNote call in API()", note);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexToDelete = notes.indexOf(note);
                notes.splice(indexToDelete, 1);
                console.log("new Notes in API", notes);
                resolve(notes);
            }, delay);
        });
    }
}

export default NotesApi;
