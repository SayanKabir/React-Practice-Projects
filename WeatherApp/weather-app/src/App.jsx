import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';

const API_KEY = '';

const App = () => {
  const [city, setCity] = useState('Kolkata');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    try {
      console.log('Fetching weather for:', cityName);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        console.error('Fetch failed with status:', res.status);
        throw new Error('Failed to fetch weather');
      }

      const data = await res.json();
      console.log('API response:', data);

      if (data.cod !== 200) {
        console.error('Weather API Error:', data.message);
        setError(data.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError('');
      }
    } catch (err) {
      console.error('Network error or bad API key:', err);
      setError('Something went wrong');
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []); // on initial mount

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🌤️ Weather App</h1>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => fetchWeather(city)}>Search</button>

      {error && <p style={{ color: 'red' }}>❌ {error}</p>}

      {weather ? (
        weather.main ? (
          <WeatherCard weather={weather} />
        ) : (
          <p>Loading data...</p>
        )
      ) : (
        <p>Enter a city and hit Search</p>
      )}
    </div>
  );
};

export default App;
