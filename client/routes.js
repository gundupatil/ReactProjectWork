import React from 'react';
import App from './components/App';
import {Route, IndexRoute} from 'react-router';
import Greetings from './components/Greetings';
import SignUpPage from './components/signup/SignupPage';
import AddStack from './containers/AddStack';
import EditAccount from './containers/EditAccount';
import ManageAccountPage from './containers/ManageAccountPage'

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Greetings}/>
        <Route path ="signup" component={SignUpPage}/>
        <Route path="add-stack" component={AddStack}/>
        <Route path="edit-account" component={EditAccount}/>
        <Route path="manage-account" component={ManageAccountPage}/>
    </Route>
);