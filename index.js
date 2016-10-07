'use strict'
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Activity = require('./activities-model');
const request = require('request');
const path = require('path');
const port = process.env.PORT || 3080;

const User = require('./user-model');

const uristring =
    process.env.MONGODB_URI ||
    'mongodb://localhost/neet';

mongoose.connect(uristring, function(error) {
  ///// If error connecting to MongoDB
  if (error) {
      console.error(error);
  ///// If successfully connected to MongoDB
  } else {
      console.log('Mongoose connected successfully')
  }
})

///// Parsing json
app.use(bodyParser.json());
///// Parsing urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/activities', function(req, res) {
  console.log('running', Activity)
  Activity.find({}, function(error, activities) {
    console.log('Activities: ', activities)
    res.send(activities);
  })
})

///// Set up server listening port
app.listen(port, function () {
    console.log('Server started at http://localhost:' + port)
})
