import React, { Component } from 'react';
import Header from '../components/Header';
import Flats from '../components/Flats/Flats';

import './App.css';

class App extends Component {
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
        { city: 'Sydney',
          suburb: 'Glebe',
          roomtype: 'shared room',
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
        <Flats allRooms = {this.state.rooms} />
      </div>
    );
  }
}

export default App;