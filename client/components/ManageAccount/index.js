import React from 'react';

import map from 'lodash/map';

import {browserHistory} from 'react-router';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.css';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
const style = {
  margin: 12,
};

//import axios from 'axios';
class ManageAccount extends React.Component {
     render(){
        
        return(
        <div>
            <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn>Ussername</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Description</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn> </TableHeaderColumn>
                </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>1arsdgjhghd</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                
                <TableRow>
                    <TableRowColumn>5szfdxgfcnvx</TableRowColumn>
                    <TableRowColumn>Christopher Nolan</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                </TableBody>
  </Table>
                    
        </div>
        );
    }
}
export default ManageAccount;
