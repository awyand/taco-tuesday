// Import Express
var express = require("express");
// Import taco.js model
var taco = require("../models/taco.js");

// Create router
var router = express.Router();

// Create routes and set up logic with routes
// Get index and all tacos route
router.get("/", function(req, res) {
  // Call taco selectAll method
  taco.selectAll(function(data) {
    // Store array of tacos (data) in an obeject with tacos key
    var tacosObject = {
      tacos: data
    };
    // Render index view with tacosObject
    res.render("index", tacosObject);
  });
});

// Insert new taco route
router.post("/api/tacos", function(req, res) {
  // Call taco insertOne method, passing column names and values
  taco.insertOne("(taco_name, gromphed)", `("${req.body.taco_name}", ${req.body.gromphed})`, function(result) {
    // Send back ID of new taco
    res.json({id: result.insertId});
  })
});

// Update taco route
router.put("/api/tacos/:id", function(req, res) {
  // Set condition
  var condition = `id = ${req.params.id}`;
  // Set update
  var update = `gromphed = ${req.body.gromphed}`;

  // Call taco updateOne method, passing update and condition
  taco.updateOne(update, condition, function(result) {
    // Handle result conditions
    if (result.changedRows === 0) {
      // If no rows were changed, the ID doesn't exist so return response status 404
      res.status(404).end();
    } else {
      // Otherwise, send status 200 in response
      res.status(200).end();
    }
  });
});

// Export router
module.exports = router;
