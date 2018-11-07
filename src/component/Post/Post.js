import React, {Component} from 'react';
import {connect} from 'react-redux'
import {singlePost} from '../../Redux/actions'
import {getAllPosts} from '../../Redux/actions'
import './Post.css'

class Post extends Component {



  componentDidMount = () => {
    
    this.findPost()
  }
  findPost = () =>{
    const id= this.props.match.params.id
    this.props.singlePost(id)
  }
  test = () => {
    console.log(this.props.post)
  }

  render(){
    const post = this.props.post.map(i => {
      return (
        <div>
          <h1 className = 'post-title'> {i.title} </h1>
          <p> {i.author} </p>
          <img src = {i.url} alt = '' className = 'post-imgBox'/>
          <p> {i.content}</p>
        </div>
      )
    })
    return (
      <div className = 'current_post'>
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts
  }
}
export default connect(mapStateToProps,{singlePost,getAllPosts})(Post);