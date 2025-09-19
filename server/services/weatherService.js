// VIBE: Service to fetch weather data from OpenWeatherMap API
const axios = require('axios');

const API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Validate API key
if (!API_KEY) {
  console.error('ERROR: OpenWeatherMap API key not found');
}

/**
 * Get current weather for a city
 * @param {string} city - City name
 * @returns {Promise<Object>} Weather data
 */
async function getCurrentWeather(city) {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Use metric for Celsius
      }
    });

    // Extract relevant data from response
    const { data } = response;
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      description: data.weather[0].description,
      condition: data.weather[0].main,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      pressure: data.main.pressure,
      sunrise: data.sys.sunrise * 1000, // Convert to milliseconds
      sunset: data.sys.sunset * 1000,   // Convert to milliseconds
      timestamp: Date.now()
    };
  } catch (error) {
    console.error(`Error fetching weather for ${city}:`, error.message);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || `Failed to fetch weather for ${city}`);
    }
    throw new Error(`Failed to fetch weather for ${city}`);
  }
}

/**
 * Get weather for multiple cities
 * @param {string[]} cities - Array of city names
 * @returns {Promise<Array>} Array of weather data
 */
async function getMultipleCitiesWeather(cities) {
  try {
    const promises = cities.map(city => getCurrentWeather(city));
    const results = await Promise.allSettled(promises);
    
    // Filter out rejected promises and return fulfilled values
    return results
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value);
  } catch (error) {
    console.error('Error fetching multiple cities:', error.message);
    throw new Error('Failed to fetch weather for multiple cities');
  }
}

module.exports = {
  getCurrentWeather,
  getMultipleCitiesWeather
};