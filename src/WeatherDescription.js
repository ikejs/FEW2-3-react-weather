import React from 'react';

function WeatherDescription(props) {
  return(
    <div>
      <p><b>{props.title}</b></p>
      <p>{props.description}</p>
    </div>
  )
}

export default WeatherDescription;