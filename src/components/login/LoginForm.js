import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({onSubmit, onChange, passwordValue, emailValue}) => {
    return (
        <form onSubmit={onSubmit}>
            <TextInput
                type="email"
                value={emailValue}
                placeholder="Email goes here"
                onChange={onChange} />
            <TextInput
                type="password"
                value={passwordValue}
                placeholder="Password"
                onChange={onChange} />
            <input
                type="submit"
                className="btn btn-primary" />
        </form>
    );
};

LoginForm.propTypes = {
    // myProp: PropTypes.string.isRequired
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    passwordValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired
};

export default LoginForm;
