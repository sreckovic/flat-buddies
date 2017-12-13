import React, { Component } from "react";

import axios from "../../axios";

import SingleRoom from "../../components/SingleRoom/SingleRoom";

class Rooms extends Component {
  state = {
    rooms: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    axios
      .get("/rooms.json")
      .then(response => {
        const fetchedRooms = response.data;
        const newRooms = [];

        for (let key in fetchedRooms) {
          if (!fetchedRooms.hasOwnProperty(key)) continue;
          // Push new room object in newRooms array
          newRooms.push({ id: key, address: fetchedRooms[key].address });
        }

        this.setState({ rooms: newRooms });
        console.log(this.state.rooms);
      })
      .catch(error => {
        this.setState({ error: true });
        //console.log(error);
      });
  }

  render() {
    let roomsList = null;

    if (this.state.loading) {
      roomsList = <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    if (this.state.error) {
      roomsList = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    }

    if (this.state.rooms) {
      roomsList = this.state.rooms.map(room => {
        return (
          <div className="column is-one-third" key={room.id}>
            <SingleRoom room={room} />
          </div>
        );
      });
    }

    return <div className="columns">{roomsList}</div>;
  }
}

export default Rooms;
