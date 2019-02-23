/* tslint:disable-next-line */
import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/index.scss';
import App from './components/App';
import { HashRouter as Router, Route, Link } from "react-router-dom";

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);