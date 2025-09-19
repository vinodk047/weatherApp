import React from 'react';

const WeatherCard = ({ city, isSelected, onClick }) => {
  // Handle missing data gracefully
  if (!city) return null;

  // Weather icon URL from OpenWeatherMap
  const iconUrl = `http://openweathermap.org/img/wn/${city.icon}@2x.png`;

  return (
    <div 
      className={`weather-card rounded-lg p-4 cursor-pointer ${
        isSelected 
          ? 'bg-primary-100 border-2 border-primary-500 shadow-md' 
          : 'bg-white border border-gray-200 hover:border-primary-300'
      }`}
      onClick={() => onClick(city)}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{city.city}</h3>
          <p className="text-sm text-gray-500">{city.country}</p>
        </div>
        <div className="weather-icon">
          <img src={iconUrl} alt={city.condition} width="50" height="50" />
        </div>
      </div>
      
      <div className="mt-2">
        <p className="text-2xl font-bold">{city.temperature}°C</p>
        <p className="text-sm capitalize">{city.description}</p>
      </div>
      
      <div className="mt-3 flex justify-between text-xs text-gray-500">
        <span>Humidity: {city.humidity}%</span>
        <span>Wind: {city.wind} m/s</span>
      </div>
    </div>
  );
};

export default WeatherCard;