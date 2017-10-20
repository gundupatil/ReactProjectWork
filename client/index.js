import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';



import { Router, browserHistory } from 'react-router';

const store = createStore(
    (state = {})=> state,
    //dispacthing asynchronous actions
    applyMiddleware(thunk)
);
render(
    <Provider store={store}>
     <Router history={browserHistory} routes={routes} />
     </Provider>,
    document.getElementById('app')
    );
