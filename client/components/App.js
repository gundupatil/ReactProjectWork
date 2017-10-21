import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends React.Component {
    render(){
        return(
            <div className="container">
                
                    <NavigationBar/>
                    <FlashMessagesList/>
                
            
            {this.props.children}
          
            </div>    
            
        );
    }    
}
export default App;