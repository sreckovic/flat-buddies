import React from 'react';
import Flat from './flat'

const FlatList = (props) => {
  return (
    <div className="flats-list">
      <Flat />
      <Flat />
      <Flat />
    </div>
  );
}

export default FlatList;