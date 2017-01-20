// This component handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../actions/loginActions';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.logout = this.logout.bind(this);
    }

    logout() {
        loginActions.logout()
            .then(() => {
                console.log("logged out...");
            });
    }

    render() {
        let auth = this.props.state.loginReducer.token == "" ? false : true;
        return (
            <div className="container">
                <Header
                    auth={auth}
                    logout={this.logout} />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    state: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}

export default connect(mapStateToProps)(App);
