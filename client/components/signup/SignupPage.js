import React from 'react';
import SignupForm from '../SignupForm/index';
import {connect} from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';

class SignupPage extends React.Component {
    render(){
        const {userSignupRequest, addFlashMessage} = this.props;
        return(
        <div>
            <h1>Sign up Page</h1>
                
                        <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
                    
        </div>
        );
    }

}
SignupPage.protoTypes={
     userSignupRequest: React.PropTypes.func.isRequired,
      addFlashMessage : React.PropTypes.func.isRequired
}
export default connect( null, {userSignupRequest, addFlashMessage } )(SignupPage);