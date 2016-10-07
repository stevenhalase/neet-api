'use strict'
const Activity = require('./activities-model');
const mongoose = require('mongoose');

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

function seedActivities () {
  let activities = [{
      user: {
        name: 'Steve',
        email: 'sally11b@gmail.com',
        address: '2354 Main St Milwaukee, WI 53215',
        location: {
          lat: 43.004482,
          lng: -87.940650
        }
      },
      description: 'BBQ Party',
      place: {
        name: 'My house',
        location: {
          lat: 43.004482,
          lng: -87.940650
        }
      },
      date: '10/21/2016',
      time: '3:00PM'
  },{
      user: {
        name: 'Joe',
        email: 'joey@gmail.com',
        address: '8927 Rogers St Milwaukee, WI 53215',
        location: {
          lat: 43.004156,
          lng: -87.936192
        }
      },
      description: 'Beer Pong',
      place: {
        name: 'Hangout Spot',
        location: {
          lat: 43.004156,
          lng: -87.936192
        }
      },
      date: '10/23/2016',
      time: '8:30PM'
  },{
      user: {
        name: 'Mike',
        email: 'mike@gmail.com',
        address: '9837 Racine Ct Milwaukee, WI 53215',
        location: {
          lat: 43.000342,
          lng: -87.937752
        }
      },
      description: 'Crocheting Meeting',
      place: {
        name: 'The House',
        location: {
          lat: 43.000342,
          lng: -87.937752
        }
      },
      date: '10/14/2016',
      time: '1:45PM'
  }]

  for (var i = 0; i < activities.length; i++) {
    let newActivity = new Activity(activities[i]);
    newActivity.save(function(saveErr, newActivityEntry) {
      if (saveErr) {
        console.log('Error saving Activity: ', saveErr)
      }
      else {
        console.log('sending back newActivityEntry: ', newActivityEntry)
      }
    })
  }
}

seedActivities();
