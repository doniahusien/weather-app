import React from 'react'
import style from './info.module.css'
const Info = ({ info }) => {
 
        const date = new Date(info.dt);
        const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const day = date.getDate();
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }); // Extracts the day of the week (returns "Saturday")
        const month = date.toLocaleDateString('en-US', { month: 'long' });
    

    return (
        <>
            {info && info.dt && (<div className={style.left}>
                <h1>{info.city}</h1>
                <h5>{time}</h5>
                <h4>{weekday}, {day} {month}</h4>
            </div>)}

        </>
    )
}

export default Info