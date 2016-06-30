import axios from 'axios'

var secret = require('./secret.json')
var apiKey = secret.API_KEY
var urlBase = "http://api.openweathermap.org/data/2.5/"

function getWeatherForecast(city) {
  return axios.get(urlBase + "forecast/daily?q=" + city + "&type=accurate&APPID=" + apiKey + "&cnt=5")
}

const helper = {
  getWeather(city) {
    return getWeatherForecast(city)
      .then(function(forecast) {
        return forecast.data
      })
  }
}

module.exports = helper;
