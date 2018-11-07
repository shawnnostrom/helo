const bcrypt = require('bcrypt-nodejs')

module.exports = {
  register: (req,res) => {
    const db = req.app.get('db')
    db.find_users([req.body.username])
    .then(user => {
      if(!user[0]){
       
      bcrypt.hash(req.body.password,null,null, (error,hash) => {
      if(error){
       return res.send('hash failed')
      }
      db.register(req.body.username,hash)
      .then( () => res.status(200).send('user created'))
      .catch(error => console.error(error))
    })
  }else {return res.status(500).send('user exists')}
    })
  },
  login: (req,res) => {
    const db = req.app.get('db')
    db.find_users([req.body.username])
    .then(user => {
      bcrypt.compare(req.body.password, user[0].password, (error,isCorrect) => {
        if(error){
          return res.status(500).send(error)
        }
        if(isCorrect){
          req.session.user = user[0]
          return res.send(req.session.user)
        }
        else{
          return res.status(500).send('Username or Password incorrect')
        }
      })
    })
    .catch(error => console.error(error))
  },
  logout: (req,res) => {
    delete req.session.user
    res.send('logged out')
  },
  authorize: (req,res,next) => {
    console.log('authorizing', req.session.user)
    if(req.session.user){
      next()
    }else{
      return res.status(500).send(`You don't have permission or you are not login`)
    }
  },
  sendSession: (req,res) => {

    res.send(req.session.user)
  },
  addPost: (req,res) => {
    const db = req.app.get('db')
    const {title,url,content} = req.body
    db.addpost([title,url,content])
    .then( () => res.status(200).send('success'))
    .catch(error => res.status(500).send(error) )
  },
  getPost: (req,res) => {
    console.log('check', req.session.user)
    const db = req.app.get('db')
    db.getpost()
    .then (posts => res.status(200).send(posts))
    .catch(error => res.status(500).send(error))
  }
}