import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bulma/css/bulma.min.css';
import './scss/custom.scss';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

library.add([faAngleDown, faAngleUp]);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
