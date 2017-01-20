import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginApi from '../../api/loginApi';
import * as loginActions from '../../actions/loginActions';
import {browserHistory} from 'react-router';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: "",
            password: ""
        };

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(event){
        const key = event.target.type;
        this.setState({[key]: event.target.value});
    }

    submitForm(event){
        event.preventDefault();
        this.props.actions.login({
            email: this.state.email,
            password: this.state.password
        }).then(() => {
            browserHistory.push('/notes');
        });
    }

    render() {
        return (
            <div className="loginContainer">
                <h1>Login Page</h1>
                <LoginForm
                    onSubmit={this.submitForm}
                    onChange={this.onChange}
                    passwordValue={this.state.password}
                    emailValue={this.state.email} />
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <p>**Because I mocked the api and this is hardcoded...</p>
                        <p>**Only email/pw combo that will work:</p>
                    </div>
                    <div className="panel-body">
                        <p>Email: user@email.com</p>
                        <p>Password: 1234</p>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.loginReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
//export default LoginPage;
