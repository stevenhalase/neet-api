'use strict'
const mongoose = require('mongoose');

const activitiesSchema = mongoose.Schema({
    user: {
      name: {type: String},
      email: {type: String},
      address: {type: String},
      location: {
        lat: {type: String},
        lng: {type: String}
      }
    },
    description: { type: String },
    place: {
      name: {type: String},
      location: {
        lat: {type: String},
        lng: {type: String}
      }
    },
    date: { type: String }
});

const Activity = mongoose.model('activities', activitiesSchema);

module.exports = Activity;
