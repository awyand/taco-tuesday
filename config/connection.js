// Require mysql package
var mysql = require("mysql");

// Create connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tacos_db"
});

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

module.exports = connection;
