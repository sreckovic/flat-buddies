import React from 'react';

const room = (props) => {
  console.log(props.rooms);

  return (
    <div className="flat">
      <p>{props.rooms[0].suburb}, {props.rooms[0].city}</p>
    </div>
  )
}

export default room;

//<p>{props.flat.roomtype} with {props.flat.bathroom}</p>