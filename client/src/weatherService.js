// VIBE: Service to connect with backend API for weather data
import axios from 'axios';

// API base URL - hardcoded to ensure connection
const API_BASE_URL = 'http://localhost:5003/api';

/**
 * Fetch weather data for a specific city
 * @param {string} city - City name
 * @returns {Promise<Object>} - Weather data for the city
 */
export const fetchWeatherForCity = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/weather`, {
      params: { city }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching city weather:', error);
    throw new Error(
      error.response?.data?.error?.message || 
      error.message || 
      'Failed to fetch weather data'
    );
  }
};

/**
 * Fetch weather data for featured Asian cities
 * @returns {Promise<Array>} - Array of weather data for featured cities
 */
export const fetchFeaturedCities = async () => {
  console.log('Fetching featured cities from:', `${API_BASE_URL}/weather/featured`);
  try {
    const response = await axios.get(`${API_BASE_URL}/weather/featured`);
    console.log('Featured cities response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching featured cities:', error);
    throw new Error(
      error.response?.data?.error?.message || 
      error.message || 
      'Failed to fetch featured cities'
    );
  }
};