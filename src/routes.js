import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import NotesAppPage from './components/notes/NotesAppPage';
import LoginPage from './components/login/LoginPage';
import {requireAuthentication} from './components/AuthenticatedComponent';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="notes" component={requireAuthentication(NotesAppPage)} />
        <Route path="login" component={LoginPage} />
    </Route>
);
