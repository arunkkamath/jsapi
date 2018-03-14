// app.js
var express = require('express');
var db = require('./db');
var app = express();
// ADD THESE TWO LINES
var UserController = require('./user/UserController');
app.use('/users', UserController);
module.exports = app;