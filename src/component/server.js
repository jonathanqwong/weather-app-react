const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const API_KEY = { procces.env.WEATHER_KEY };

app.use(cors());

app.get('/weather', async (req, res) => {
    const { location } = req.query;
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
        const { name, current } = response.data;
        const weatherData = {
            location: location,
            // region: locationRes.region,
            description: current.condition.text,
            icon: current.condition.icon,
            temperatureCelcius: current.temp_c,
            temperatureFehrenheit: current.temp_c,
            humidity: current.humidity,
            last_updated: current.last_updated
        };

        res.json(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
