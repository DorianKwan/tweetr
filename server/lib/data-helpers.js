"use strict";

// Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  const tweetsCollection = db.collection('tweets');
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      tweetsCollection.insertOne(newTweet, callback);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      tweetsCollection.find({}).toArray(callback);
    }

  };
}
