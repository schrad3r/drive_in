import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/menu/Menu';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/Menu" component={Menu}/>
              <Route path="/About" component={About}/>
            </Switch>
          </div> 
        </Router>
      </div>
    );
  }
}

export default App;
