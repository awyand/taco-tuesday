// Require mysql package
var mysql = require("mysql");

// JawsDB creation for Heroku deployment
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Create connection on localhost if not using JawsDB
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tacos_db"
  });
}

// Connect
connection.connect(function(err) {
  // Error handling
  if (err) {
    console.log("Error: " + err.stack);
    return;
  } else {
    // Print message to terminal
    console.log(`Connected Taco Tuesday Database as User #${connection.threadId}`);
  }
});

// Export connection
module.exports = connection;
