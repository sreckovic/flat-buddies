import React from 'react';
import Flat from './flat'

const FlatList = (props) => {
  return (
    <div className="flats-list">
      <Flat flat={props.flats} />
      <Flat flat={props.flats}  />
      <Flat flat={props.flats}  />
    </div>
  );
}

export default FlatList;