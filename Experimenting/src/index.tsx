/* tslint:disable-next-line */
import React from 'react';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/index.scss';
import App from './components/App';
import { sum } from './foo';

render(
    <App message="World" />,
    document.getElementById('root'),
);

console.log(sum(1, 2));
