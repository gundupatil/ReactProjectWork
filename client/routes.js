import React from 'react';
import App from './components/App';
import {Route, IndexRoute} from 'react-router';
import Greetings from './components/Greetings';
import SignUpPage from './components/signup/SignupPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Greetings}/>
        <Route path ="signup" component={SignUpPage}/>
    </Route>
);