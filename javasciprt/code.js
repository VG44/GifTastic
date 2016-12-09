 var animals = ["Dog", "Cat", "Eagle", "Hamster", "Frog", "Turtles", "Pig", "Otters", "Duck", "Doves"];

  function renderButtons() {
      $("#animal-view").empty();
      $("#gifs-here").empty();

          for (var i = 0; i < animals.length; i++) {

            var a = $("<button>");
            a.addClass("animal");
            a.attr("data-name", animals[i]);
            a.text(animals[i]);
            $("#animal-view").append(a);
          }
        }

        $("#add-anmial").on("click", function(event) {
          event.preventDefault();

          // This line grabs the input from the textbox
          var animal = $("#animal-input").val().trim();

          // The movie from the textbox is then added to our array
          animals.push(animal);

          // Calling renderButtons which handles the processing of our movie array
          renderButtons();
        });

   // $("#animal-view").on("click", function() {
     // $("#gifs-here").empty();
     function URL(){
      var pet = $(this).data("name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      pet + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({ url: queryURL, method: "GET" }).done(function(response) {

        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var animalDiv = $('<div>');
          var p = $("<p>").text("Rating: " + results[i].rating);
          var animalImage = $('<img>');
          animalImage.attr("src",results[i].images.fixed_height.url);
          $(animalDiv).append(p);
          $(animalDiv).append(animalImage);
          $("#gifs-here").prepend(animalDiv);
          
         }
     });
    }
   // });
   $(document).on("click", ".animal", URL);

    renderButtons();