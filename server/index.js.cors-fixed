// VIBE: Main entry point for the weather API server
require('dotenv').config(); // Load environment variables FIRST before any imports

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const weatherRoutes = require('./routes/weatherRoutes');

// Verify API key is loaded
const apiKey = process.env.WEATHER_API_KEY;
if (!apiKey) {
  console.error('ERROR: WEATHER_API_KEY environment variable is not set');
  process.exit(1);
}

// Initialize express app
const app = express();

// Middleware
// Applying Helmet with adjusted settings to allow cross-origin requests
app.use(helmet({
  crossOriginResourcePolicy: false
}));

// Configure CORS - be more permissive for local development
app.use(cors({
  origin: '*',
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Define port
const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/weather', weatherRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Weather API server is running',
    status: 'online',
    endpoints: {
      getCurrentWeather: '/api/weather?city=tokyo',
      getFeaturedCities: '/api/weather/featured'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal server error',
      status: err.status || 500
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Key loaded: ${apiKey.substring(0, 5)}...`);
});