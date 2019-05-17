import React, { Component } from 'react';
import './App.css';
// import Login from './login' 
// import Regist from './registr' 
// import Profile from './profile'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main from './main';
import Item from './item';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
    
  }


  render() {
    return (
          <Router>
            <div>
              <Route path="/" exact component={Main} />
              <Route path="/item" exact component={Item} />
            </div>
          </Router>
    );
  }
}

export default App;