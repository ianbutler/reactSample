import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadNotes } from './actions/notesActions';

import './styles/reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const store = configureStore();
if (!localStorage.getItem('reduxState')) {
    store.dispatch(loadNotes());
}
store.subscribe(() => {    
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
