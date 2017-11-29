import React, { Component } from 'react';
import Header from '../components/Header';
import Rooms from '../components/Rooms/Rooms';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [
        { city: 'Sydney',
          suburb: 'Ashfield',
          roomtype: 'private room',
          bathroom: 'shared bathroom',
          furnishing: 'Unfurnished',
          available: 'Oct 14, 2017',
          length_of_stay: 2,
          gender: 'Anyone welcome'},
      ]
    };
  }

  render() {
    return (
      <div className="flat-buddies">
        <Header/>
        <Rooms rooms = { this.state.rooms } />
      </div>
    );
  }
}

export default Flat;