import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Asian Weather App
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Weather data provided by OpenWeatherMap API
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;