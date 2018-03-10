$(document).ready(function() {
  // Change gromph button click handler
  $(document).on("click", ".change-gromph", function(e) {
    // Prevent default
    e.preventDefault();
    // Save clicked taco ID and new gromph state to variables
    var clickedTacoId = $(this).data("id");
    var newGromphState = {gromphed: $(this).data("newgromph")};
    // AJAX PUT Request
    $.ajax("/api/tacos/" + clickedTacoId, {
      type: "PUT",
      data: newGromphState
    }).then(function() {
      // Reload page
      location.reload();
    });
  });


  // Add new taco button click handler
  $(document).on("click", "#add-taco-btn", function(e) {
    // Prevent default
    e.preventDefault();
    // Save user input to variable
    var newTaco = {
      taco_name: $("#new-taco-input").val().trim(),
      gromphed: false
    };
    // Ensure user has entered a name for taco
    if (newTaco.taco_name.length > 0) {
      // AJAX POST request
      $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
      }).then(function() {
        // Reload page
        location.reload();
      });
    }
  });
});
