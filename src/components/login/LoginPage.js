import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TextInput from '../common/TextInput';
import LoginApi from '../../api/loginApi';
import * as loginActions from '../../actions/loginActions';
import {browserHistory} from 'react-router';

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
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.submitForm}>
                    <TextInput
                        type="email"
                        value={this.state.email}
                        placeholder="Email goes here"
                        onChange={this.onChange} />
                    <TextInput
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.onChange} />
                    <input
                        type="submit"
                        className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

LoginPage.propTypes = {
    // myProp: PropTypes.string.isRequired
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
