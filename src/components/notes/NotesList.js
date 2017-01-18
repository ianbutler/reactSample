import React, {PropTypes} from 'react';

const NotesList = ({list}) => {
    return (
        <div className="actualNotes">
            <ul>
                {list.map((listItem, index) => {
                    return (
                        <li key={index}>{listItem}</li>
                    );
                })}
            </ul>
        </div>
    );
};

NotesList.propTypes = {
    // myProp: PropTypes.string.isRequired
    list: PropTypes.array.isRequired
};

export default NotesList;
