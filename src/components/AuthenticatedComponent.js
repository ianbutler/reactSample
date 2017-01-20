import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            if (this.props.token != "fakeToken") {
                 browserHistory.goBack();
                 alert("Not authenticated")
                //this.props.dispatch(push('/'));
            }
        }

        render() {
            return (
                <div>
                    {this.props.token == "fakeToken"
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            );
        }
    }

    AuthenticatedComponent.propTypes = {
        dispatch: PropTypes.func,
        location: PropTypes.object,
        isAuthenticated: PropTypes.bool
    };

    function mapStateToProps(state) {
        const token = state.loginReducer.token;
        const userName = state.loginReducer.user.email;
        const isAuthenticated = state.loginReducer.isAuthenticated;

        return {
            token: token,
            userName: userName,
            isAuthenticated: isAuthenticated
        };
    }

    return connect(mapStateToProps)(AuthenticatedComponent);

}
