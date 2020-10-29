//get search field and search button
const weatherSeachField = $("#search-field");
const searchButton = $("#search-button");
const apiKey = "d9305931e1063c44f30e15cc75da75a1";
const tableColumn = $(".tcol");
const searchedCity;



//on for submission.
searchButton.submit(function(event){
    event.preventDefault();
    searchedCity = weatherSeachField.val();
});


//construct query url with searched city by user.
function generateQueryUrl(searchedCity)
{
  let url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityToSearchFor + "&APPID="+ apiKey;
  console.log("Generated query url:"+ url);
  return url;
}


function updateSearchHistoryTable(returnedWeatherData)
{
   //get table.
   //get row.
   //get element to append.
   //append element to tbody.
}




//perform get request request or current days weather forecast.
$.ajax({
    url : generateQueryUrl(searchedCity),
    dataType : "json",
    METHOD : "GET"
  }).then(function(returnedWeatherData)
  {
    updateSearchHistoryTable(returnedWeatherData);  
  })
  .catch(function(error)
  {
     console.log("Error has occured "+ error);
  });





 

