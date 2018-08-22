$("#add-wing").on("submit", function(event) {
    event.preventDefault();

    var wing = {
      name: $("#wing-sauce").val().trim()
    };
    
    // Send the POST request.
    $.ajax("/api/wings", {
      type: "POST",
      data: wing
    }).then(
      function() {
        console.log("added new wing");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#eat").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      eaten: 1
    };

    // Send the DELETE request.
    $.ajax("/api/wings/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        //console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


 $("#delete").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/wings/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted wing", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });