import sun from '../assets/imgs/sunny.svg';
import cloudy from '../assets/imgs/cloudy.svg'
import fog from '../assets/imgs/fog.svg';
import drizzle from '../assets/imgs/light_drizzle.svg';
import freezingDrizzle from '../assets/imgs/freezing_drizzle.svg';
import rain from '../assets/imgs/light_rain.svg'
import freezingRain from '../assets/imgs/light_freezing_rain.svg';
import snow from '../assets/imgs/light_snow.svg';
import snowGrains from '../assets/imgs/heavy_snow.svg';
import rainShowers from '../assets/imgs/torrential_rain_shower.svg';
import snowShowers from '../assets/imgs/light_snow_showers.svg';
import thunderstorm from '../assets/imgs/moderate_or_heavy_rain_with_thunder.svg';

export const weatherCodeToImage = {
    0: sun,
    1: cloudy,
    2: cloudy,
    3: cloudy,
    45: fog,
    48: fog,
    51: drizzle,
    53: drizzle,
    55: drizzle,
    56: freezingDrizzle,
    57: freezingDrizzle,
    61: rain,
    63: rain,
    65: rain,
    66: freezingRain,
    67: freezingRain,
    71: snow,
    73: snow,
    75: snow,
    77: snowGrains,
    80: rainShowers,
    81: rainShowers,
    82: rainShowers,
    85: snowShowers,
    86: snowShowers,
    95: thunderstorm,
    96: thunderstorm,
    99: thunderstorm,
};