import React, {PropTypes} from 'react';

const TextInput = ({value, type, placeholder, label, onChange, name}) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                className="form-control"
                onChange={onChange} />
        </div>
    );
};

TextInput.propTypes = {
    // myProp: PropTypes.string.isRequired
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.string.isRequired,
    label: PropTypes.string
};

export default TextInput;
