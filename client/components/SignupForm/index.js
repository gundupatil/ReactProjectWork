import React from 'react';
import timezones from './../../data/timejones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import {browserHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';
const style = {
  margin: 12,
};

//import axios from 'axios';
class SignupForm extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false,
            //invalid: false
        }
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this); 
    }
   
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    isValid(){
        const {errors, isValid} = validateInput(this.state);

        if(!isValid){
            this.setState({errors});
        }

        return isValid;
    }


    onSubmit(e) {
    e.preventDefault();

    if(this.isValid()){
    //axios.post('/api/users',{user: this.state});
    this.setState({ errors : {}, isLoading : true});
    this.props.userSignupRequest(this.state).then(
        ()=>
        {   
             this.props.addFlashMessage({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.context.router.push('/');
        },
        ({data}) => this.setState({errors: data, isLoading:false})

    );
    //console.log(this.state);
    }
  }
     render(){
         const {errors} = this.state;
         const options = map(timezones, (val, key) =>
            <option key={val} value={val}>{key}</option>,
            
    );
   

     return (
     <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>
        <Grid>
            <Row center="xs">
            <Col xs={12} sm={6} md={6} lg={6}>
                <TextFieldGroup
                fullWidth
                error={errors.username}
                label="Username"
                onChange={this.onChange}
                
                value={this.state.username}
                field="username"
                />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
            
                <TextFieldGroup
                fullWidth
                error={errors.email}
                label="Email"
                onChange={this.onChange}
                
                value={this.state.email}
                field="email"
                />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
                <TextFieldGroup
                fullWidth
                error={errors.password}
                label="Password"
                onChange={this.onChange}
                value={this.state.password}
                field="password"
                type="password"
                />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
                <TextFieldGroup
                fullWidth
                error={errors.passwordConfirmation}
                label="Password Confirmation"
                onChange={this.onChange}
                value={this.state.passwordConfirmation}
                field="passwordConfirmation"
                type="password"
                />
                </Col>
                </Row>
                <Row center="xs">
                    <Col>
                <div className={styles.button}>
                        
                    <RaisedButton disabled={this.state.isLoading} label="Create" primary={true} style={style} />
                     <FlatButton label="Cancel" />
                     
                </div>  
                 </Col>
        </Row>
        </Grid>       
    </form>
     );
    }    
}
SignupForm.protoTypes={
     userSignupRequest: React.PropTypes.func.isRequired,
     addFlashMessage : React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}
export default SignupForm;
