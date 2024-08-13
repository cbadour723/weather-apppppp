import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const API_KEY = 'da69b7aeae754d5a9e141711241108'; // Your WeatherAPI key
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('City not found');
      setWeather(null);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (city) {
      fetchWeather();
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Search
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default WeatherApp;
