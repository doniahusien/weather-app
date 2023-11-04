import React from 'react';
import DailyWeather from '../../components/Daily/DailyWeather';
import Hoyrly from '../../components/hourly/Hoyrly';
import Current from '../../components/Current/Current';
import Info from '../../components/Info/Info';
import { useState, useEffect } from 'react';
import style from './weatherCard.module.css'
import { CgSearch } from 'react-icons/cg';
import { fetchGeolocation, searchWeather } from '../../module/Api';

const Weather = () => {
    const [city, setCity] = useState("Egypt");
    const [currents, setCurrent] = useState({})
    const [info, setInfo] = useState([])
    const [dailys, setDaily] = useState({});
    const [hourly, setHourly] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { lat, lng } = await fetchGeolocation(city);
                const { infos, daily, hourly, current } = await searchWeather(lat, lng, city);
                setInfo(infos);
                setDaily(daily);
                setHourly(hourly);
                setCurrent(current);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);
    const handleState = (e) => {
        setCity(e.target.value);
    };
    return (
        <>
            <div className={style.container}>
                <div className={style.top}>
                    <input type="text" placeholder='search' onChange={handleState} />
                    <span onClick={async () => {
                        try {
                            const { lat, lng } = await fetchGeolocation(city);
                            const { infos, daily, hourly, current } = await searchWeather(lat, lng, city);
                            setInfo(infos);
                            setDaily(daily);
                            setHourly(hourly);
                            setCurrent(current);
                        } catch (error) {
                            console.log('Error:', error);
                        }
                    }}><CgSearch /></span>


                </div>
                <div className={style.weather}>
                    <Info info={info} />
                    <Current current={currents} />
                    <DailyWeather dailys={dailys} />
                    <Hoyrly hourly={hourly} />
                </div>
            </div>
        </>
    )
}

export default Weather