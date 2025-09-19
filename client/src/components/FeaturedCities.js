import React from 'react';
import WeatherCard from './WeatherCard';

const FeaturedCities = ({ cities, onSelectCity, selectedCityName }) => {
  if (!cities || cities.length === 0) {
    return (
      <div className="p-4 border rounded-lg bg-gray-50 text-center">
        <p className="text-gray-500">No featured cities available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {cities.map((city) => (
        <WeatherCard
          key={`${city.city}-${city.country}`}
          city={city}
          isSelected={city.city === selectedCityName}
          onClick={onSelectCity}
        />
      ))}
    </div>
  );
};

export default FeaturedCities;