# Weather App

## Overview
This is a weather forecasting application built using React. The app provides real-time weather updates for a searched location, including current temperature, weather conditions, humidity, wind speed, and a 5-day forecast. The user can search for any city to get the latest weather details.

## Features
- **Search Functionality:** Users can search for any city to get weather updates.
- **Current Weather:** Displays temperature, humidity, wind speed, pressure, and weather conditions.
- **5-Day Forecast:** Provides future weather predictions.
- **Hourly Forecast:** Shows temperature and conditions for upcoming hours.
- **Neumorphic UI Design:** A modern, dark-themed user interface.

## Tech Stack
- **Frontend:** React, CSS
- **State Management:** React Hooks
- **API:** OpenWeatherMap API ,
- **Icons:** FontAwesome, Weather Icons

## Installation
```sh
# Clone the repository
git clone https://github.com/your-repo/weather-app.git
cd weather-app

# Install dependencies
npm install

# Get an API key from OpenWeatherMap and create a .env file
echo "REACT_APP_WEATHER_API_KEY=your_api_key_here" > .env

# Start the development server
npm start
```

## Usage
1. Enter a city name in the search bar.
2. View real-time weather details.

## Future Improvements
- Implement a theme switcher (dark/light mode).
- Improve performance with caching strategies.
- Add more weather details like UV index, air quality.
