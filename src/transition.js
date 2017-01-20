import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export function transition(Component) {
    class Transition extends React.Component {
        constructor(props, context) {
            super(props, context);
        }

        render() {
            return (
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false} >
                    <Component {...this.props} />
                </ReactCSSTransitionGroup>
            );
        }
    }

    Transition.propTypes = {
        // myProp: PropTypes.string.isRequired
    };

    function mapStateToProps(state, ownProps) {
        return {
            state: state
        };
    }

    // function mapDispatchToProps(dispatch) {
    //     return {
    //         state: bindActionCreators(courseActions, dispatch)
    //     };
    // }

    return connect(mapStateToProps)(Transition);
}
