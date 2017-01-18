import React, {PropTypes} from 'react';
//import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
//import * as courseActions from '../../actions/courseActions';

class NotesAppPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            list: [],
            currentEntry: ""
        };

        this.saveEntry = this.saveEntry.bind(this);
        this.updateEntry = this.updateEntry.bind(this);
    }

    saveEntry(event){
        event.preventDefault();

        let newList = this.state.list.slice();
        newList.push(this.state.currentEntry);
        this.setState({
            list: newList
        });
    }

    updateEntry(event){
        return this.setState({
            currentEntry: event.target.value
        });

    }

    render() {
        return (
            <div>
                <h2>Notes App</h2>
                <div>
                    <form>
                        <div className="field">
                            <label htmlFor="textInput">Label</label>
                            <input
                                value={this.currentEntry}
                                name="textInput"
                                type="text"
                                placeholder="enter stuff"
                                className="form-control"
                                onChange={this.updateEntry} />
                        </div>
                        <input
                            type="submit"
                            value="Save"
                            onClick={this.saveEntry}
                            className="btn btn-primary" />
                    </form>

                    <div className="actualNotes">
                        <ul>
                            {this.state.list.map((listItem, index) => {
                                return (
                                    <li key={index}>{listItem}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

NotesAppPage.propTypes = {
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

//export default connect(mapStateToProps, mapDispatchToProps)(NotesAppPage);
export default NotesAppPage;
