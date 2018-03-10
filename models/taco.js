// Import ORM
var orm = require("../config/orm.js");

// Define taco model, which holds various methods to execute on the tacos table
// These methods are called by tacosController and call the methods in orm.js
var taco = {
  selectAll: function(cb) {
    orm.selectAll("tacos", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("tacos", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(update, condition, cb) {
    orm.updateOne("tacos", update, condition, function(res) {
      cb(res);
    });
  }
};

// Export taco object
module.exports = taco;
