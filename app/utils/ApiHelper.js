import axios from 'axios'
// import secret from './secret.json'

var secret = require('./secret.json')
var apiKey = secret.API_KEY
var urlBase = "http://api.openweathermap.org/data/2.5/"

function getCurrentWeather(city) {
  return axios.get(urlBase + "weather?q=" + city + "&type=accurate&APPID=" + apiKey)
}
function getWeatherForecast(city) {
  return axios.get(urlBase + "forecast/daily?q=" + city + "&type=accurate&APPID=" + apiKey)
}

const helper = {
  getWeather(city) {
    getCurrentWeather(city).then(function(weather) {console.log(weather.data)})
  }
}

module.exports = helper;