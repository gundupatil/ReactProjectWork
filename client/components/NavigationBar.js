import React from 'react';
import{Link} from 'react-router';
//import RaisedButton from 'material-ui/RaisedButton';
import {RaisedButton} from 'material-ui';


export default()=>{
    return (
      <div>  
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <li><Link to="/" className="navbar-brand">Home</Link></li>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup">Sign up</Link></li>
              </ul>
          </div>
        </div>
      </nav>
      <RaisedButton label="Default" />
      </div>
    );
}


//export default NavigationBar;
