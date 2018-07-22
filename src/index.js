import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import ReviewPage from "./Components/ReviewPage";
import Form from "./Components/Form";

import registerServiceWorker from './registerServiceWorker';

//add routes here

ReactDOM.render(
    <Router>
      <div>
       <Route exact path="/" component={App}/>
       <Route path="/form" component={Form}/>   
       </div>
    </Router>,
    document.getElementById('root')
  );
registerServiceWorker();
