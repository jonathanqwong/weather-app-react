// App.js
import './App.css';
import React, { useState } from 'react';
import WeatherForm from './component/WeatherForm';
import WeatherInfo from './component/WeatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (location) => {
    try {
      const response = await fetch(`/weather?location=${location}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div>
        <h1>Jonathan's Weather App</h1>
        <WeatherForm getWeather={getWeather} />
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </div>
  );
};

export default App;
