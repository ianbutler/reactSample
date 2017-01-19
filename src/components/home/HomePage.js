import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as generalActions from '../../actions/generalActions';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    // componentWillReceiveProps(nextProps) {
    //     //console.log("nextProps:::::", nextProps);
    //     console.log("componentWillReceiveProps() nextProps::::", nextProps);
    //
    // }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.state == nextProps.state ? false : true;
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <h2>Current State of this application:</h2>
                <h3>Notes:</h3>
                {this.props.state.notesReducer.map((note, index) => {
                    return <p key={index}>{note}</p>;
                })}
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
