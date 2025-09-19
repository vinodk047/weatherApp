# Asian Cities Weather App

A modern web application that displays current weather information for cities in Asia using OpenWeatherMap API. Built with React (frontend) and Node.js Express (backend).

## Features

- Search for weather in any Asian city
- Featured display of 5 major Asian cities (Tokyo, Seoul, Bangkok, Mumbai, Jakarta)
- Detailed weather information including temperature, humidity, wind, and more
- Responsive design for mobile and desktop devices
- Modern UI with smooth animations and transitions

## Tech Stack

**Frontend:**
- React.js 18
- Tailwind CSS for styling
- Axios for API requests

**Backend:**
- Node.js with Express
- Axios for OpenWeatherMap API integration
- CORS for cross-origin support
- Helmet for improved security
- Dotenv for environment variables

## Prerequisites

Before running this application, you need:

1. Node.js (v14 or newer)
2. An OpenWeatherMap API key (get one at https://openweathermap.org/api)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd weather-webapp
```

### 2. Set up the backend

```bash
cd server
npm install

# Create .env file from the example
cp .env.example .env
```

Edit the `.env` file and add your OpenWeatherMap API key:

```
WEATHER_API_KEY=your_api_key_here
PORT=5000
ORIGIN=http://localhost:3000
```

### 3. Set up the frontend

```bash
cd ../client
npm install

# Create .env file from the example
cp .env.example .env
```

Make sure the API URL in the frontend's `.env` file points to your backend:

```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

### Development Mode

1. Start the backend:
```bash
cd server
npm run dev
```

2. In a new terminal, start the frontend:
```bash
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

### Production Mode

1. Build the frontend:
```bash
cd client
npm run build
```

2. Start the backend server:
```bash
cd ../server
npm start
```

## Deployment

### Frontend Deployment (Vercel/Netlify)

1. Set up environment variables in the deployment platform:
   - `REACT_APP_API_URL` - URL of your backend API

2. Connect your GitHub repository and deploy

### Backend Deployment (Render/Heroku)

1. Set up environment variables in the deployment platform:
   - `WEATHER_API_KEY` - Your OpenWeatherMap API key
   - `PORT` - The port to run on (usually provided by the platform)
   - `ORIGIN` - The URL of your frontend application

2. Connect your GitHub repository and deploy

## API Endpoints

- `GET /api/weather?city={cityName}` - Get weather for a specific city
- `GET /api/weather/featured` - Get weather for featured Asian cities

## License

MIT

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework
- [React](https://reactjs.org/) and [Express](https://expressjs.com/) communities