import React, {PropTypes} from 'react';

const TextInput = ({value, type, placeholder, onChange, name}) => {
    return (
        <input
            value={value}
            name={name}
            type={type}
            placeholder={placeholder}
            className="form-control"
            onChange={onChange} />
    );
};

TextInput.propTypes = {
    // myProp: PropTypes.string.isRequired
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.string.isRequired
};

export default TextInput;
