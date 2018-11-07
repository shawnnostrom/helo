import axios from 'axios'


export const logout =  () => {
  axios.get('http://localhost:8080/api/logout')
    .then( user => this.props.history.push('../login') )
    .catch(error => console.error(error))
}
export const login = (user) => {
  return dispatch => {
    axios.post('http://localhost:8080/api/login',user)
    .then(res => {
      dispatch ({
        type: "LOGIN",
        payload: res
      })
    })
    .then( () => {
      axios.get('http://localhost:8080/api/dashboard')
      .then( () => this.props.history.push('./dashboard') )
      })
    .catch(error =>  console.error(error))
  }
}
export const getAllPosts = () => {
  return dispatch => {
    axios.get('http://localhost:8080/api/posts')
    .then(res => {
      console.log(res.data)
      dispatch ({
        type: "GET",
        payload: res
      })
    })
  }
}
export const singlePost = (id) => {
  return {
    type : "FIND",
    payload : id
  }
}
