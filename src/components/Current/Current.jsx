import React from 'react'
import style from './Current.module.css'
import humidit from '../../assets/imgs/humidity 1.svg'
import windy from '../../assets/imgs/wind 1.svg';
import press from '../../assets/imgs/pressure-white 1.svg';
import uv from '../../assets/imgs/uv-white 1.svg'
import { weatherCodeToImage } from '../../module/WeatherImages';
import getWeatherName from '../../module/WeatherName';
const Current = ({ current }) => {
   
    return (
        <>
            <div className={style.right}>
                <div className={style.mainDetail}>
                    <h1>{current.temperature_2m}°C </h1>
                </div>

                <div className={style.image}>
                <img src={weatherCodeToImage[current.weathercode]} alt="" />
                    <h2>{getWeatherName(current.weathercode)}</h2>
                </div>

                <div className={style.more}>
                    <div className={style.item}>
                        <img src={humidit} alt="" />
                        <p>{current.relativehumidity_2m}</p>
                        <h5>Humditiy</h5>
                    </div>
                    <div className={style.item}>
                        <img src={windy} alt="" />
                        <p>{current.windspeed_10m}</p>
                        <h5>Wind</h5>
                    </div>
                    <div className={style.item}>
                        <img src={press} alt="" />
                        <p>{current.surface_pressure}hPa</p>
                        <h5>Pressure</h5>
                    </div>
                    <div className={style.item}>
                        <img src={uv} alt="" />
                        <p>{current.rain }</p>
                        <h5>Rain</h5>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Current