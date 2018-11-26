const express = require('express');
require('./config/config');
const models = require('./models');
require('./global_functions');
const sessions = require('./controllers/SessionsController');
const Sessions = require('./controllers/SessionsController');
const User = require('./controllers/UsersController');
const bodyParser = require('body-parser');
const app = express();
require('mysql2');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// import test from './routes/test';
const test = require('./routes/test');

app.use('/', test);

// CORS 
app.use(function (req, res, next) {
  //Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

if (CONFIG.app ===  'dev') {
  models.sequelize.sync();
}

app.get('/sessions', Sessions.getAll);
app.get('/sessions/:sessionId', Sessions.get);
app.post('/sessions', Sessions.create);
app.put('/sessions', Sessions.update);

app.get('/users', User.getAll);
app.get('/users/:userId', User.get);
app.post('/users', User.create);
app.put('/users', User.update);

module.exports = app;