$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevouredBurger = {
        devoured: true
      };
  
     
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredBurger
      }).then(
        function() {
          console.log("changed devoured to", newDevouredBurger);
         
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
     
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
       
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          
          location.reload();
        }
      );
    });
  });