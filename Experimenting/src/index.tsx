/* tslint:disable-next-line */
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/index.scss';
import App from './components/App';
// tslint:disable-next-line:import-name

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);
