require('dotenv').config();
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser');
const controller = require('./controller');
const session = require('express-session');
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(session({
  secret: "jasdkfjalksdjflkasdf",
  resave: true,
  saveUninitialized: false,
}))

massive(process.env.dataBase)
  .then( db => {
    app.set('db',db)
    console.log('connected to database')
  })
  .catch(error => console.error(error))

  app.post('/api/login',controller.login)
  app.post('/api/register', controller.register)
  app.get('/api/logout',controller.logout)
  app.get('/api/dashboard',controller.sendSession)
  app.post('/api/addpost',controller.addPost)
  app.get('/api/posts',controller.getPost)

app.listen(8080, () => console.log(`listening on 8080`))