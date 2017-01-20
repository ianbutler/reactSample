import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import NotesAppPage from './components/notes/NotesAppPage';
import LoginPage from './components/login/LoginPage';
import {requireAuthentication} from './components/AuthenticatedComponent';
import {transition} from './transition';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={transition(HomePage)} />
        <Route path="notes" component={requireAuthentication(transition(NotesAppPage))} />
        <Route path="login" component={transition(LoginPage)} />
    </Route>
);
