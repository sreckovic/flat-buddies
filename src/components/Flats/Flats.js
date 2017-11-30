import React from 'react';

import Flat from './Flat/Flat'

const flats = (props) => props.allRooms.map((room, index) => {
      return (
        <Flat room={room} key={index} />
      )
    }
  );

export default flats;