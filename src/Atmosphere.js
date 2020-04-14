import React from 'react';

function WeatherDescription(props) {
  return(
    <div>
      <p><b>Pressure: </b>{props.pressure}</p>
      <p><b>Humidity: </b>{props.humidity}</p>
    </div>
  )
}

export default WeatherDescription;