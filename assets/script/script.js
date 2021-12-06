const searchFromEl = document.querySelector("#search-form");
const cityEl = document.querySelector("#city")

let getWeather = function (city) {
    // format the api url
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=ff4c22d08a862ed4463158846d8f8434"
}
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=ff4c22d08a862ed4463158846d8f8434").then(function(response) {
        console.log(response)
    });

    