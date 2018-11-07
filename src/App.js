import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path = '/login' component = {Auth} />
            <Route path = '/dashboard' component = {Dashboard} />
            <Route path = '/form' component = {Form} />
            <Route path = '/post/:id' component = {Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
