import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Flats from '../components/Flats/Flats';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      static_rooms: [
        { city: 'Sydney', suburb: 'Ashfield', roomtype: 'private room', bathroom: 'shared bathroom', furnishing: 'Unfurnished', available: 'Oct 14, 2017', length_of_stay: 6, gender: 'Anyone' },
        { city: 'Sydney', suburb: 'Glebe', roomtype: 'shared room', bathroom: 'shared bathroom', furnishing: 'Unfurnished', available: 'Oct 12, 2017', length_of_stay: 2, gender: 'Anyone welcome' },
      ],
      rooms: []
    };
  }

  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/sreckovic/flat-buddies/rooms').then(response => {
      const rooms = response.data;
      this.setState({ rooms: rooms });
    });
  }

  render() {
    return (
      <div className="flat-buddies clearfix">
        <Header />
        <Flats rooms={this.state.rooms} />
      </div>
    );
  }
}

export default App;