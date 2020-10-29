# weather-dashboard
Weather Dashboard

-- Get previous music api call projects.
-- Create a favicon.
-- Search for icons needed.
-- Research on flex box.
-- Download bootstrap as a cdn or bootstrap files.
-- Search bootsrap components to use.


//generated apiKey = "https://api.openweathermap.org/data/2.5/weather?q=Abeokuta&APPID=d9305931e1063c44f30e15cc75da75a1"

//https://www.amcharts.com/free-animated-svg-weather-icons/   (Icons).


-- Sudo code.
     - create layout - header / aside / middle content / content at the bottom.
     - Get bootstrap component to use.
     - Find tiles to use for the weather display.
     - Get the icons to depict each icons to show.
     - Animate icons displayed.
     - reference moment.js in project.




GIVEN a weather dashboard with form inputs


WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast





- Get the search field.
- Get the search button.
- Create a request url.
- Make request.
- Capture response and append data to the 




   // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
   //Retrieve the form into a variable
    const movieSearchForm = $("#movie-search-form");
    //retrieve the search input field into a variable
    const movieTitleField = $("#movie-search-form input[name='movie-search-field']");
    //table body where movie data will be displayed
    const movieResults = $(".table.movie-entries tbody");
    //result status to show users of response status
    let resultStatus = $("#get-status");
    //const totalResults = $("#results");
    console.log('movie object', movieSearchForm, movieTitleField, movieResults);

    //when user submit form perform below action.
    movieSearchForm.submit(function(event){
      //prevent form from perform default behaviour.
      event.preventDefault();
      //retrieve the text user inputted into the search field
      let movieTitleString = movieTitleField.val();
      console.log("movie title", movieTitleString);
      //concatenate the movie title that has a space with a plus sign.
      movieTitleString = movieTitleString.replace(/ +/g, "+");
      console.log("movie title", movieTitleString);
      //construct the api url and add the query parameter.
      const queryURL =  "https://www.omdbapi.com/?s="+movieTitleString+"&y=&plot=short&apikey=trilogy";
      console.log("Query Url", queryURL);
      //give user status update
      resultStatus.text("Please wait!!");
      $.ajax({
          url : queryURL,
          dataType : "json",
          METHOD : "GET"
      }).then(function(dataForMovie){
        resultStatus.text("Here are your results!!");
        console.log("Movie data", dataForMovie);
        updateResult(dataForMovie);   
      }).catch(function(error){
        console.log("Sorry there was an error!"); 
        console.log("Error", error);
      });
    });  

    // this will retrieve needed data from response and render on page.
    function updateResult(dataForMovie)
    {  
      const movies = dataForMovie.Search;
      for(movie of movies){
        let resultRow = "<tr>"
        resultRow += "<td>" + movie.Title + "</td>";
        resultRow += "<td>" + movie.Year + "</td>";
        resultRow += "<td>" + movie.Type+ "</td>";
        resultRow += "<td>" + " <img src=" +movie.Poster+ " width=100 height=100 /> "+"</td>";
        console.log("*****", resultRow);
        resultRow += "</tr>";
        movieResults.append(resultRow);
      }
    }


<!--
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-2 text-muted"></h6>
        <p class="card-text"></p>
      </div>
    </div>
-->