const fetchGeolocation = async (city) => {
    if (city === '') {
        alert('Please enter a city name');
    } else {
        let geoUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=0ed73374497e46798690896cef7eb079&no_annotations=1`;
        try {
            let response = await fetch(geoUrl);
            if (response.ok) {
                let data = await response.json();
                if (data.results && data.results.length > 0) {
                    const { lat, lng } = data.results[0].geometry;
                    return { lat, lng };
                } else {
                    console.log('No results found for the given city');
                }
            } else {
                console.log('API request failed');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
};

const searchWeather = async (lat, lng, city) => {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relativehumidity_2m,weathercode,surface_pressure,windspeed_10m,rain&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max&temperature_unit=fahrenheit&timezone=auto&past_days=5&forecast_days=1`;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            const infos = {
                city: city,
                dt: data.current.time,
            };
            const daily = data.daily;
            const hourly = data.hourly;
            const current = data.current;
            return { infos, daily, hourly, current };
        } else {
            console.log('API request failed');
        }
    } catch (error) {
        console.log('Error:', error);
    }
};

export { fetchGeolocation, searchWeather };