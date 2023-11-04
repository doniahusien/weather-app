import React from 'react'
import style from '../hourly/hourly.module.css'
import { weatherCodeToImage } from '../../module/WeatherImages';
const Hoyrly = ({ hourly }) => {
    return (
        <>
            {
                hourly && hourly.time && (
                    < div className={style.hourly}>
                        <h1>Hourly Forcast:</h1>
                        <div className={style.hours}>
                            {
                                hourly.time.slice(0, 6).map((date, index) => (
                                    <div className={style.hour} key={index}>
                                        <p>{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                        <img src={weatherCodeToImage[hourly.weathercode[index]]} alt="" />
                                        <p>{hourly.temperature_2m[index]} °C</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div >
                )}
        </>
    )
}

export default Hoyrly