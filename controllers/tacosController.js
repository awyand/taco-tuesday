// Import Express
var express = require("express");
// Import taco.js model
var taco = require("../models/taco.js");

// Create router
var router = express.Router();

// Create routes and set up logic with routes
// Get index and all tacos route
router.get("/", function(req, res) {
  taco.selectAll(function(data) {
    var testObject = {
      tacos: data
    };
    console.log(testObject);
    res.render("index", testObject);
  });
});

// Insert new taco route
router.post("/api/tacos", function(req, res) {
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
