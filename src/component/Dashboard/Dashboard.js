import React, {Component} from 'react';
import axios from 'axios'
import Nav from '../Nav/Nav'
import {connect} from 'react-redux'
import {getAllPosts} from '../../Redux/actions'
import './Dashboard.css'

function myPosts () {
  return  (
    <div>
      <h1>My Posts</h1>
      
    </div>
  )
}

class Dashboard extends Component {

  state = {
    search: ''
  }
  componentDidMount = () => {
    this.showPosts()
  }
  showPosts = () => {
    this.props.getAllPosts()
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key] : value})
  }

  
  postClick = (id) => {
    this.props.history.push(`./post/${id}`)
  }

  render(){
    const posts = this.props.posts.map(i => {
      return (
        <div className = 'display-box' onClick = {() => this.postClick(i.id)}>
          <h1>{i.title}</h1> 
          <p>{i.author}</p>
          <img src = {i.picture} alt = '' />
        </div>
      )
    })
    return (
      <div className = 'dashboard'>
        <Nav />
        <div className = 'search_bar'> 
          <input name = 'search' value = {this.state.search} onChange = {this.handleChange} />
          <button>Reset</button>
          {myPosts()}
           <button onClick = {this.test}>o</button>
          {posts}
         
        </div>
        <div className = 'search_box' >

        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts : state.posts,
    users : state.users
  }
}

export default connect(mapStateToProps,{getAllPosts})(Dashboard);