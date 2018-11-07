import React, {Component} from 'react';
import axios from 'axios'
import './Form.css'

const emptyImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2wg8VxQvjPDwbot6GFybP6TFVbwD1zARXZTUVUDKwjJsplZHP'

class Form extends Component {
  
  state = {
    title: '',
    imageUrl: emptyImg,
    content: ''
  }

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState ({ [key]: value })
  }

  handleClick = () => {
    const post = {
      title: this.state.title,
      url: this.state.imageUrl,
      content: this.state.content,
    
    }
    axios.post('http://localhost:8080/api/addpost',post)
    .then( () => this.props.history.push('./dashboard'))
    .catch(error => console.error(error))
  }
  
  
  render(){
    return (
      <div>
        <h1>New Post</h1>
        <p>Title:</p>
        <input name = 'title' value = {this.state.title} onChange = {this.handleChange} className = 'input-form' />
        <br />
        <img className = 'form-img' src = {this.state.imageUrl} alt = '' />
        <p>Image URL:</p>
        <input name = 'imageUrl' ref = {url => this.imageUrl = url} onChange = {this.handleChange} className = 'input-form' />
        <p>Content:</p>
        <input name = 'content' value ={this.state.content} onChange = {this.handleChange} className = 'input-form' />
        <button onClick = {this.handleClick}> Post </button>
      </div>
    )
  }
}

export default Form;