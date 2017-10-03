import React from 'react';

const Flat = (props) => {
  console.log(props.flat.suburb);

  return (
    <div className="flat">
      <h2>{props.flat.suburb}, {props.flat.city}</h2>

      <ul>
      </ul>
    </div>
  )
}

export default Flat;

//<p>{props.flat.roomtype} with {props.flat.bathroom}</p>