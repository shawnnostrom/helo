const initState = {
  users: [],
  posts : [],
}

const reducer = (state = initState,actions) => {

  switch (actions.type){
    case "LOGIN":{
      return {...state , users : actions.payload.data }
    }
    case "GET":{
      return {...state , posts : actions.payload.data }
    }
    case "FIND": {
     return{ ...state, posts : state.posts.filter(post => post.id == actions.payload) }
    }
    default: return state;
  }
  

}

export default reducer 