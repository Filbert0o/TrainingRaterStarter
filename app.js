
const express = require('express');

const app = express();

// import test from './routes/test';
const test = require('./routes/test');

app.use('/', test);

module.exports = app;