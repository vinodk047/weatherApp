import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary-700 text-gray shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <h1 className="text-2xl font-bold">Asian Weather App</h1>
        </div>
        <div className="text-sm">
          <span>Live Weather Updates</span>
        </div>
      </div>
    </header>
  );
};

export default Header;