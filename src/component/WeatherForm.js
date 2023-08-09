// WeatherForm.js
import React, { useState } from 'react';

const WeatherForm = ({ getWeather }) => {
    // useState to keep track of function component
    // accepts initial value and function to update the state
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather(location);
        setLocation('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default WeatherForm;
