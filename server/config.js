// Load environment variables first thing
require('dotenv').config();

// Verify critical environment variables
if (!process.env.WEATHER_API_KEY) {
  console.error('ERROR: WEATHER_API_KEY environment variable is missing');
  console.error('Please create a .env file in the server directory with WEATHER_API_KEY=your_api_key');
  process.exit(1);
}

console.log('Environment variables loaded successfully!');