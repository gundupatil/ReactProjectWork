import React from 'react';
import SignupForm from '../../components/SignupForm/index';
import {connect} from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';

class AddStack extends React.Component {
    render(){
        const {userSignupRequest, addFlashMessage} = this.props;
        return(
        <div>
            <h1>Add Stack Page</h1>
            <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
        </div>
        );
    }
}

AddStack.protoTypes={
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage : React.PropTypes.func.isRequired
}

export default connect( null, {userSignupRequest, addFlashMessage } )(AddStack);