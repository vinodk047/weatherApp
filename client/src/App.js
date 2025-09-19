// VIBE: Main weather app component
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
// WeatherCard is used by FeaturedCities component
import FeaturedCities from './components/FeaturedCities';
import WeatherDetails from './components/WeatherDetails';
import Footer from './components/Footer';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchWeatherForCity, fetchFeaturedCities } from './weatherService';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [featuredCities, setFeaturedCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch featured cities on component mount
  useEffect(() => {
    const loadFeaturedCities = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchFeaturedCities();
        setFeaturedCities(data);
        // Set the first city as selected by default
        if (data.length > 0 && !selectedCity) {
          setSelectedCity(data[0]);
        }
      } catch (err) {
        setError('Failed to load featured cities. Please check your connection or try again later.');
        console.error('Error fetching featured cities:', err);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedCities();
  }, [selectedCity]); // Added selectedCity as a dependency

  // Handle city search
  const handleCitySearch = async (city) => {
    if (!city || city.trim() === '') return;
    
    try {
      setSearchLoading(true);
      setError(null);
      const weatherData = await fetchWeatherForCity(city);
      setSelectedCity(weatherData);
      
      // Update in featured cities if exists, otherwise add to beginning
      const existingIndex = featuredCities.findIndex(
        c => c.city.toLowerCase() === weatherData.city.toLowerCase()
      );
      
      if (existingIndex >= 0) {
        const updatedCities = [...featuredCities];
        updatedCities[existingIndex] = weatherData;
        setFeaturedCities(updatedCities);
      }
    } catch (err) {
      setError(`Could not find weather data for "${city}". Please check the city name and try again.`);
      console.error('Error searching city:', err);
    } finally {
      setSearchLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <SearchBar onSearch={handleCitySearch} loading={searchLoading} />
          {error && <ErrorMessage message={error} />}
        </section>
        
        {loading ? (
          <LoadingSpinner message="Loading weather data..." />
        ) : (
          <>
            {selectedCity && (
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
                <WeatherDetails city={selectedCity} />
              </section>
            )}
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Featured Asian Cities</h2>
              <FeaturedCities 
                cities={featuredCities} 
                onSelectCity={(city) => setSelectedCity(city)}
                selectedCityName={selectedCity?.city}
              />
            </section>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;