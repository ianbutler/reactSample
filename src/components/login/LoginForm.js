import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const LoginForm = ({onSubmit, onChange, passwordValue, emailValue}) => {
    return (
        <form className="loginForm" onSubmit={onSubmit}>
            <TextInput
                type="email"
                label="Email"
                value={emailValue}
                placeholder="Email goes here"
                onChange={onChange} />
            <TextInput
                type="password"
                label="Password"
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
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    passwordValue: PropTypes.string.isRequired,
    emailValue: PropTypes.string.isRequired
};

export default LoginForm;
