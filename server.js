const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'finalproject'
  }
});

const register = require('./controllers/register');
const image = require('./controllers/image');
const profile = require('./controllers/profile');
const signin = require('./controllers/signin');
const imageUrl = require('./controllers/imageUrl');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
	res.json("Hello");
})


app.post('/signin', (req,res) => { signin.signinHandler(req,res,db,bcrypt)});

app.post('/register', (req, res) => { register.registerHandler(req,res,db)});

app.get( '/profile/:id', (req, res) => { profile.profileHandler(req, res, db)});

app.put( '/image', (req, res) => { image.imageHandler(req, res,db)});

app.post( '/imageUrl', (req, res) => { imageUrl.apiHandler(req, res,db)});




app.listen(3000);