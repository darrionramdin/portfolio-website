import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';

import { Provider } from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';

import store from './services/session/store';

import Routes from './services/routes';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Routes />
    </Router>
</Provider>, 
document.getElementById('root'));
