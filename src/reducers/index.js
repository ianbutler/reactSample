import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    notesReducer,
    loginReducer
});

export default rootReducer;
