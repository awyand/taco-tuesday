// Import ORM
var orm = require("../config/orm.js");

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
