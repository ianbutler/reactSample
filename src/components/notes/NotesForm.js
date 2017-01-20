import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const NotesForm = ({currentEntry, onChange, onSave}) => {
    return (
        <form>
            <div className="field">
                <label htmlFor="textInput">Label</label>
                <TextInput
                    value={currentEntry}
                    name="textInput"
                    type="text"
                    placeholder="enter stuff"
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
