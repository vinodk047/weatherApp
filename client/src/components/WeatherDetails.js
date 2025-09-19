import React from 'react';

const WeatherDetails = ({ city }) => {
  if (!city) return null;

  // Format time from timestamp
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  // Weather icon URL from OpenWeatherMap
  const iconUrl = `http://openweathermap.org/img/wn/${city.icon}@4x.png`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary-700 text-gray p-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">{city.city}</h2>
            <p className="text-primary-100">{city.country}</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold">{city.temperature}°C</p>
            <p className="text-xl">Feels like {city.feels_like}°C</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <img
                src={iconUrl}
                alt={city.condition}
                className="w-24 h-24"
              />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold capitalize">{city.condition}</h3>
                <p className="text-gray-600 capitalize">{city.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-500 text-sm">Humidity</p>
                <p className="text-xl font-semibold">{city.humidity}%</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-500 text-sm">Wind Speed</p>
                <p className="text-xl font-semibold">{city.wind} m/s</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-500 text-sm">Pressure</p>
                <p className="text-xl font-semibold">{city.pressure} hPa</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-gray-500 text-sm">Updated</p>
                <p className="text-xl font-semibold">{new Date(city.timestamp).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>

          <div className="md:ml-6 mt-6 md:mt-0 flex-1">
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h3 className="text-lg font-medium mb-2">Sunrise & Sunset</h3>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-500 text-sm">Sunrise</p>
                    <p className="font-medium">{formatTime(city.sunrise)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-gray-500 text-sm">Sunset</p>
                    <p className="font-medium">{formatTime(city.sunset)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Air Conditions</h3>
              <p className="text-gray-600 mb-4">
                Current weather conditions in {city.city} are characterized by {city.description}. 
                The temperature is {city.temperature}°C but feels like {city.feels_like}°C.
              </p>
              <p className="text-primary-600 text-sm">
                Data provided by OpenWeatherMap
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;