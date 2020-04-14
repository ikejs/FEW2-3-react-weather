import React from 'react';

function Temperature(props) {
  return(
    <div>
      <p><b>Temp: </b>{props.temp}°</p>
    </div>
  )
}

export default Temperature;