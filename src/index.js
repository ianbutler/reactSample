import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/home/HomePage';

//const store = configureStore();

// render (
//     <Provider store={store}>
//         <Router history={browserHistory} routes={routes} />
//     </Provider>,
//     document.getElementById('app')
// );

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
