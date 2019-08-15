import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware()); // store = Redux!

ReactDOM.render(
    <Provider store={store}><App /></Provider>, // Provider is the Glue between Redux & React
    document.querySelector('#root')
);
