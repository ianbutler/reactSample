import React, {PropTypes} from 'react';

const NotesForm = ({currentEntry, onChange, onSave}) => {
    return (
        <form>
            <div className="field">
                <label htmlFor="textInput">Label</label>
                <input
                    value={currentEntry}
                    name="textInput"
                    type="text"
                    placeholder="enter stuff"
                    className="form-control"
                    onChange={onChange} />
            </div>
            <input
                type="submit"
                value="Save"
                onClick={onSave}
                className="btn btn-primary" />
        </form>
    );
};

NotesForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    currentEntry: PropTypes.string
};

export default NotesForm;
