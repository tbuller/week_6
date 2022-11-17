// file: index.js

const got = require('got');
const apiKey = '70b8068c19adf5b2d84b0fee367041ad'; // include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
  console.log(weatherData.main.temp);
  console.log(weatherData.weather[0].main)
});

console.log('Requesting weather data');


