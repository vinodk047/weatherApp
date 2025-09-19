// VIBE: Routes for weather API
const express = require('express');
const router = express.Router();
const weatherService = require('../services/weatherService');

/**
 * Validates city parameter in request
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateCityParam = (req, res, next) => {
  const city = req.query.city;
  
  if (!city || typeof city !== 'string' || city.trim().length === 0) {
    return res.status(400).json({
      error: {
        message: 'City parameter is required',
        status: 400
      }
    });
  }
  
  // Sanitize the city parameter
  req.query.city = city.trim();
  next();
};

// Get current weather for a specific city
router.get('/', validateCityParam, async (req, res, next) => {
  try {
    const { city } = req.query;
    const weatherData = await weatherService.getCurrentWeather(city);
    res.json(weatherData);
  } catch (error) {
    next(error);
  }
});

// Get weather for featured Asian cities
router.get('/featured', async (req, res, next) => {
  try {
    // List of featured Asian cities
    const featuredCities = [
      'Tokyo',
      'Seoul',
      'Bangkok',
      'Mumbai',
      'Jakarta'
    ];
    
    const weatherData = await weatherService.getMultipleCitiesWeather(featuredCities);
    res.json(weatherData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;