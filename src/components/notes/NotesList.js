import React, {PropTypes} from 'react';

const NotesList = ({list, onDelete}) => {
    return (
        <div className="actualNotes">
            <ul>
                {list.map((listItem, index) => {
                    return (
                        <li key={index}>
                            <div className="alignItemsInContainer">
                                <p>{index + 1}. {listItem}</p>
                                <button
                                    onClick={() => {onDelete(listItem)}}
                                    className="btn btn-danger">Remove</button>
                            </div>
                        </li>
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
