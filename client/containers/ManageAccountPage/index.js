import React from 'react';
import SignupForm from '../../components/SignupForm/index';
import {connect} from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';
import ManageAccount from '../../components/ManageAccount/index';

class ManageAccountPage extends React.Component {
    render(){
        const {userSignupRequest, addFlashMessage} = this.props;
        return(
        <div>
            <h1>ManageAccount Account Page</h1>
            <ManageAccount/>
        </div>
        );
    }
}

ManageAccountPage.protoTypes={
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage : React.PropTypes.func.isRequired
}

export default connect( null, {userSignupRequest, addFlashMessage } )(ManageAccountPage);