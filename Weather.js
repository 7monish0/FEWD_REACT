import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city] = useState('New York'); 

  const apiKey = '26ca6321285c639a1715d491431f085b'; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  if (loading) return <p>Loading weather...</p>;
  if (!weather) return <p>Unable to load weather data.</p>;

  return (
    <div className="weather-component">
      <h2>Weather in {weather.name}</h2>
      <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
