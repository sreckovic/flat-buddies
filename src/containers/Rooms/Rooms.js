import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from '../../axios';

import SingleRoom from '../../components/SingleRoom/SingleRoom'

class Rooms extends Component {
  state = {
    rooms: []
  };

  componentDidMount() {
    axios.get('/rooms').then(response => {
      const rooms = response.data;
      this.setState({ rooms: rooms });
      console.log('[componentDidMount]');
      console.log(this.state.rooms);
    });
  }

  render() {
    let roomsList = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    console.log(roomsList);

    if (this.state.rooms) {
      roomsList = this.state.rooms.map(room => {
        return (
          <Link to={'/posts/' + room.id} key={room.id}>
            <SingleRoom room={room} />
          </Link>
        );
      });
    }

    return (<div>{roomsList}</div>);
  }
}

export default Rooms;
