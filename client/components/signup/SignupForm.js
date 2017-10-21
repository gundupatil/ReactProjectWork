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
    //   <form onSubmit={this.onSubmit}>
    //     <h1>Join our community!</h1>

    //     <div className={classnames("form-group",{'has-error':errors.username})}>
    //       <label className="control-label">UserName</label>
    //       <input
    //             value={this.state.username} 
    //             onChange = {this.onChange}
    //             type="text"
    //             name="username"
    //             className="form-control"           
    //         />
           
    //        {errors.username && <span className="help-block">{errors.username}</span>}
    //     </div>
    //     <div className={classnames("form-group",{'has-error':errors.timezone})}>

    //       <label className="control-label">Timezone</label>
    //       <select
    //         className="form-control"
    //         name="timezone"
    //         onChange={this.onChange}
    //         value={this.state.timezone}
    //       >
    //         <option value="" disabled>Choose Your Timezone</option>
    //         {options}
    //       </select>
    //       {errors.username && <span className="help-block">{errors.username}</span>}
    //     </div>
    //     <div className={classnames("form-group",{'has-error':errors.email})}>
  
        
    //         <label className="control-label">Email</label>
    //         <input
    //             value={this.state.email} 
    //             onChange = {this.onChange}
    //             type="text"
    //             name="email"
    //             className="form-control"           
    //         />
    //         {errors.email && <span className="help-block">{errors.email}</span>}
    //     </div>
    //     <div className={classnames("form-group",{'has-error':errors.password})}>
    
    //         <label className="control-label">Password</label>
    //         <input
    //             value={this.state.password} 
    //             onChange = {this.onChange}
    //             type="password"
    //             name="password"
    //             className="form-control"           
    //         />
    //         {errors.password && <span className="help-block">{errors.password}</span>}
    //     </div>
    //     <div className={classnames("form-group",{'has-error':errors.passwordConfirmation})}>
    
    //         <label className="control-label">Password Confiramation</label>
    //         <input
    //             value={this.state.passwordConfirmation} 
    //             onChange = {this.onChange}
    //             type="password"
    //             name="passwordConfirmation"
    //             className="form-control"           
    //         />
    //         {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
    //     </div>
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
                
            
                {/*<div className={classnames("form-group", { 'has-error': errors.timezone })}>
                <label className="control-label">Timezone</label>
                <select
                    className="form-control"
                    name="timezone"
                    onChange={this.onChange}
                    value={this.state.timezone}
                >
                    <option value="" disabled>Choose Your Timezone</option>
                    {options}
                </select>
                {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>*/}
                </Col>
                </Row>
                <Row center="xs">
                    <Col>
                <div class="button">
                        
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
