import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from '../../Redux/actions'
import './Auth.css'

class Auth extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    this.setState({ [key] : value})
  }
  
  handleLogin = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('http://localhost:8080/api/login',user)
      .then ( () =>  axios.get('http://localhost:8080/api/dashboard') )
      .then( () => this.props.history.push('./dashboard') )
      .catch(error => console.error(error))
  }
  handleRegister = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('http://localhost:8080/api/register',user)
      .then( () => {
        alert('User Created')
        this.setState({ username : '', password : ''})
      })
      .catch(error => alert(error))
  }


  render () {
    return (
      <div className = 'authPage'>
        <div className = 'login-box'>
        <img src = ''  alt = ''className = 'login-img' />
        <h1>Helo</h1>
        <span>
        Username:
        <input name = 'username' value = {this.state.username} onChange = {this.handleChange}/>
        </span>
        <br />
        <span>
        Password:
        <input name = 'password' value = {this.state.password} onChange = {this.handleChange} type = 'password' />
        </span>
        <br />
        <button onClick = {this.handleLogin} > Login</button>
        <button onClick = {this.handleRegister} > Register</button>
        </div>
      </div>
    )
  }
}

export default connect(null,{login})(Auth);