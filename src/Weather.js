import React from 'react';
import WeatherDescription from './WeatherDescription';
import Temperature from './Temperature';
import Atmosphere from './Atmosphere';

function Weather(props) {

/* 
    This next step needs another level of error checking. It's 
    possible to get a JSON response for an invalid zip in which 
    case the step below fails. 
    */ 
   console.log(props.weatherData)
   // Take the weather data apart to more easily populate the component
   const { main, description, icon } = props.weatherData.weather[0]
   const { temp, pressure, humidity, temp_min, temp_max } = props.weatherData.main 

   return (
    <div>
      <WeatherDescription title={main} description={description} />
      <div>Icon: {icon}</div>
      <Temperature temp={Math.round(temp *  9 / 5 - 459.67)} />
      <Atmosphere pressure={pressure} humidity={humidity} />
      <div>Temp Min: {temp_min} Max:{temp_max}</div>
    </div>
   )
}

export default Weather;