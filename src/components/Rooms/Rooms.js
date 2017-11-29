import React from 'react';
import Room from './Room/Room'

const rooms = (props) => {
  return (
    <div className="rooms">
      <Room rooms={props.rooms} />
    </div>
  );
}

export default rooms;