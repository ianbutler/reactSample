import React, {PropTypes} from 'react';
import Note from './Note';

const NotesList = ({list, onDelete}) => {
    return (
        <div className="actualNotes">
            <ul>
                {list.map((listItem, index) => {
                    return (
                        <Note
                            key={index}
                            index={index}
                            listItem={listItem}
                            onDelete={onDelete} />
                    );
                })}
            </ul>
        </div>
    );
};

NotesList.propTypes = {
    // myProp: PropTypes.string.isRequired
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default NotesList;
