// Simple test script to verify API key loading
require('dotenv').config();

console.log('WEATHER_API_KEY from environment:', process.env.WEATHER_API_KEY);

// Try to make a test request to OpenWeatherMap API
const axios = require('axios');
const API_KEY = process.env.WEATHER_API_KEY;

if (!API_KEY) {
  console.error('Error: WEATHER_API_KEY environment variable is not set.');
  console.error('Please check your .env file or set the environment variable manually.');
  process.exit(1);
}

console.log('Making test request to OpenWeatherMap API...');

axios.get('https://api.openweathermap.org/data/2.5/weather', {
  params: {
    q: 'Tokyo',
    appid: API_KEY,
    units: 'metric'
  }
})
.then(response => {
  console.log('API test successful!');
  console.log('Retrieved weather data for:', response.data.name);
  console.log('Temperature:', response.data.main.temp, '°C');
  console.log('Condition:', response.data.weather[0].main);
})
.catch(error => {
  console.error('API test failed:', error.message);
  if (error.response) {
    console.error('Response data:', error.response.data);
    console.error('Response status:', error.response.status);
  }
});