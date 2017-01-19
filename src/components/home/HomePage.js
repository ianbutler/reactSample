import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as generalActions from '../../actions/generalActions';
import HomePageList from './HomePageList';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.state == nextProps.state ? false : true;
    // }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <h2>Current State of this application:</h2>
                <HomePageList
                    title="Notes"
                    dataArr={this.props.state.notesReducer} />
            </div>
        );
    }
}

HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
    state: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(generalActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
