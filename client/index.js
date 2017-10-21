import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
    <Provider store={store}>
         <MuiThemeProvider>
         <Router history={browserHistory} routes={routes} />
     </MuiThemeProvider>
     </Provider>,
    document.getElementById('app')
    );
