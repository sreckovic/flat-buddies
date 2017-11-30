import React from 'react';

import './Flat.css';

const flat = (props) => {
  return (
    <div className="room">
      <h3><a href="">{props.room.suburb}, {props.room.city}</a></h3>

      <p>{props.room.roomtype} with {props.room.bathroom}</p>
      <p>
        {props.room.furnishing}
        {props.room.available}
        {props.room.length_of_stay}
        {props.room.gender}
      </p>
    </div>
  )
}

export default flat;