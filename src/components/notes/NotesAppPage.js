import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as notesActions from '../../actions/notesActions';
import NotesForm from './NotesForm';
import NotesList from './NotesList';

class NotesAppPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentEntry: ""
        };

        this.saveEntry = this.saveEntry.bind(this);
        this.updateEntry = this.updateEntry.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
    }

    saveEntry(event){
        event.preventDefault();

        this.props.actions.addNote(this.state.currentEntry)
            .then(() => {
                this.setState({
                    currentEntry: ""
                });
            });
    }
    updateEntry(event){
        return this.setState({
            currentEntry: event.target.value
        });
    }

    deleteEntry(entry) {
        this.props.actions.deleteNote(entry)
    }

    render() {
        return (
            <div>
                <h2>Notes App</h2>
                <div>
                    <NotesForm
                        currentEntry={this.state.currentEntry}
                        onChange={this.updateEntry}
                        onSave={this.saveEntry} />

                    <NotesList
                        list={this.props.notes}
                        onDelete={this.deleteEntry} />
                </div>
            </div>
        );
    }
}

NotesAppPage.propTypes = {
    // myProp: PropTypes.string.isRequired
    notes: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notesReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(notesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesAppPage);
