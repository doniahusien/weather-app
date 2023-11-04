export default  function getWeatherName(weatherCode) {
    switch (weatherCode) {
        case 0:
            return 'Clear sky';
        case 1:
        case 2:
        case 3:
            return 'Cloudy';
        case 45:
        case 48:
            return 'Fog';
        case 51:
        case 53:
        case 55:
            return 'Drizzle';
        case 56:
        case 57:
            return 'Freezing Drizzle';
        case 61:
        case 63:
        case 65:
            return 'Rain';
        case 66:
        case 67:
            return 'Freezing Rain';
        case 71:
        case 73:
        case 75:
            return 'Snow';
        case 77:
            return 'Snow Grains';
        case 80:
        case 81:
        case 82:
            return 'Rain Showers';
        case 85:
        case 86:
            return 'Snow Showers';
        case 95:
        case 96:
        case 99:
            return 'Thunderstorm';
        default:
            return '';
    }
}