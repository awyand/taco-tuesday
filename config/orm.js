// Import connection from connection.js
var connection = require("./connection.js");

// ORM object for all SQL functions
var orm = {
  // Select all method
  selectAll: function(table, cb) {
    // Create query string
    var queryString = `select * from ${table}`;
    // Log query to terminal for debugging purposes
    console.log(`SQL Query: ${queryString}`);
    // Query database
    connection.query(queryString, function(sqlError, sqlResult) {
      // Error handling
      if (sqlError) throw sqlError;
      // If no error, call callback function and pass SQL result as an argument
      cb(sqlResult);
    });
  },
  // Insert method
  insertOne: function(table, cols, vals, cb) {
    // Create query string
    var queryString = `insert into ${table} ${cols} values ${vals}`;
    // Log query to terminal for debugging purposes
    console.log(`SQL Query: ${queryString}`);
    // Insert item into database
    connection.query(queryString, function(sqlError, sqlResult) {
      // Error handling
      if (sqlError) throw sqlError;
      // If no error, call callback function and pass SQL result as an argument
      cb(sqlResult);
    });
  },
  // Update method ***objColVals***
  updateOne: function(table, update, condition, cb) {
    // Create query string
    var queryString = `update ${table} set ${update} where ${condition}`;
    // Log query to terminal for debugging purposes
    console.log(`SQL Query: ${queryString}`);
    // Update item in database
    connection.query(queryString, function(sqlError, sqlResult) {
      // Error handling
      if (sqlError) throw sqlError;
      // If no error, call callback function and pass SQL result as an argument
      cb(sqlResult);
    });
  }
}

// Exporm ORM object
module.exports = orm;
