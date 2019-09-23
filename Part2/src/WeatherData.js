import React from 'react'

const WeatherData = (weather) => {



    return (
        <>
        <div>
            <p>Cloud cover: {weather.cloudcover}</p>
            <p>feelslike: {weather.feelslike}</p>
            <p>humidity: {weather.humidity}</p>
            <p>is_day: {weather.is_day}</p>
            <p>observation_time: {weather.observation_time}</p>
            <p>precip: {weather.precip}</p>
            <p>pressure: {weather.pressure}</p>
            <p>temperature: {weather.temperature}</p>
            <p>uv_index: {weather.uv_index}</p>
            <p>visibility: {weather.visibility}</p>
            {/* <p>weather_descriptions: {weather.weather_descriptions[0]}</p>
            <img src={weather.weather_icons[0].toString()} style={{width:300, height:175}} alt='weather icon'></img> */}
        </div>
    </>
    )
}

export default WeatherData