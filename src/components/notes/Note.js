import React, {PropTypes} from 'react';

const Note = ({index, listItem, onDelete}) => {
    return (
        <li className="list-group-item">
            <div className="alignItemsInContainer">
                <p>{index + 1}. {listItem}</p>
                <button
                    onClick={() => {onDelete(listItem)}}
                    className="btn btn-danger">Remove</button>
            </div>
        </li>
    );
};

Note.propTypes = {
    index: PropTypes.number,
    onDelete: PropTypes.func,
    listItem: PropTypes.string
};

export default Note;
