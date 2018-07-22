import React, {Component} from 'react';
import '../css/Form.css';

class login extends Component {
    
render() {
     return (
    <div className="card3">
       <div className="card4">
        <h3> Username </h3>
        <input className="textarea" type="text" name="username" placeholder="Username"/>      
        <h3> Password </h3>
        <input className="textarea" type="password" name="username" placeholder="Password"/>
      </div>      
    </div>
        );
    } 


}


export default login;