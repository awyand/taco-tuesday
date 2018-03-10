// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Set port
var PORT = process.env.PORT || 3000;

// Use express
var app = express();

// Set up express app and handlebars framework
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// Import routes from tacoController.js and use in express app
var routes = require("./controllers/tacosController.js");
app.use(routes);

// Start express app
app.listen(PORT, function() {
  console.log(`Taco Tuesday App now listening on port ${PORT}`);
});
