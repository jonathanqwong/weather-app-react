// WeatherInfo.js
import React from 'react';

const WeatherInfo = ({ weatherData }) => {
    const { location, region, description, icon, temperatureCelcius, temperatureFehrenheit, humidity, last_updated } = weatherData;

    return (
        <div>
            <h2>{location}, {region}</h2>
            <div>
                <img src={icon}/>
                <span>{description}</span>
            </div>
            <p>Temperature: {temperatureCelcius}°C / {temperatureFehrenheit}°F</p>
            <p>Humidity: {humidity}%</p>
            <p>Last Updated: {last_updated}</p>
        </div>
    );
};

export default WeatherInfo;
