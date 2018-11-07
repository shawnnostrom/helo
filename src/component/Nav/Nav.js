import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {


  logout = () => {
    axios.get('http://localhost:8080/api/logout')
    .then( user => this.props.history.push('../login') )
    .catch(error => console.error(error))
  }
  home = () => {
    this.props.history.push('../dashboard')
  }
  post = () => {
    this.props.history.push('./form')
  }

  render(){
    return (
      <div className = 'navBar'>
        <img src = '' alt = ''/>
        <button onClick = {this.home}> Home </button>
        <button onClick = {this.post} > new post</button>
        <button onClick = {this.logout}> Logout</button>
      </div>
    )
  }
}

export default connect()(withRouter(Nav));