import React from 'react';

export default function Card({name, max, min, img, onClose, id,}) {
  return (
    <div>
      <div>
        <button type="button" onClick={onClose}>X</button>
      </div>
      <h5>{name}</h5>
      <div>
        <div>
          <p>Min</p>
          <p>{min}°</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max}°</p>
        </div>
        <div>
          <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
        </div>
      </div>
    </div>
  )
}