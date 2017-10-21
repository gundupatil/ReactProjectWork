import React from 'react';
import SignupForm from '../../components/SignupForm/index';
import {connect} from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';

class EditAccount extends React.Component {
    render(){
        const {userSignupRequest, addFlashMessage} = this.props;
        return(
        <div>
            <h1>Edit Account Page</h1>
            <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
        </div>
        );
    }
}

EditAccount.protoTypes={
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage : React.PropTypes.func.isRequired
}

export default connect( null, {userSignupRequest, addFlashMessage } )(EditAccount);