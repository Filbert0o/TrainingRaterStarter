const express = require('express');
require('./config/config');
const models = require('./models');
require('./global_functions');
const sessions = require('./controllers/SessionsController');
const bodyParser = require('body-parser');
const app = express();
require('mysql2');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// import test from './routes/test';
const test = require('./routes/test');
const Sessions = require('./controllers/SessionsController');
const Users = require('./controllers/UsersController');

app.use('/', test);

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

app.get('/users', Users.getAll);
app.get('/users/:userId', Users.get);
app.post('/users', Users.create);
app.put('/users', Users.update);

module.exports = app;