import React from 'react'
import style from './daily.module.css';
import { weatherCodeToImage } from '../../module/WeatherImages';
const DailyWeather = ({ dailys }) => {
    return (
        <>
            {dailys && dailys.time && (
                <div className={style.daily}>
                    <h1>5 days forecast</h1>
                    <div className={style.days}>
                        {dailys.time.slice(0,5).map((date, index) => (
                            <div className={style.day} key={index}>
                                <img src={weatherCodeToImage[dailys.weathercode[index]]} alt="" />
                                <p>{dailys.temperature_2m_max[index]} °C</p>
                                <h5>{date}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default DailyWeather