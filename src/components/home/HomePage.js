import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as courseActions from '../../actions/courseActions';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>HomePage</div>
        );
    }
}

HomePage.propTypes = {
    // myProp: PropTypes.string.isRequired
};

// function mapStateToProps(state, ownProps) {
//     return {
//         state: state
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         state: bindActionCreators(courseActions, dispatch)
//     };
// }

//export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomePage;
