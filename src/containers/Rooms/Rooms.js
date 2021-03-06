import React, { Component } from "react";

import axios from "../../axios";

// import Aux from "../../hoc/Aux/Aux";
import SingleRoom from "../../components/SingleRoom/SingleRoom";
import Spinner from "../../UI/Spinner/Spinner";

import "./Rooms.css";

class Rooms extends Component {
  state = {
    rooms: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    axios
      .get("/rooms.json")
      .then(response => {
        const fetchedRooms = response.data;
        const newRooms = [];

        // console.log(fetchedRooms);

        for (let key in fetchedRooms) {
          if (!fetchedRooms.hasOwnProperty(key)) continue;
          // Push new room object in newRooms array
          newRooms.push({
            id: key,
            address: fetchedRooms[key].address,
            type: fetchedRooms[key].type,
            bedrooms: fetchedRooms[key].bedrooms,
            bathrooms: fetchedRooms[key].bathrooms,
            persons: fetchedRooms[key].persons,
            roomType: fetchedRooms[key].roomType,
            rent: fetchedRooms[key].rent,
            furnishings: fetchedRooms[key].furnishings,
            description: fetchedRooms[key].description
          });
        }

        this.setState({ loading: false, rooms: newRooms });
        //console.log(this.state.rooms);
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
        console.log(error);
      });
  }

  render() {
    let rooms = null;

    if (this.state.loading) {
      rooms = (
        <div className="column">
          <Spinner />
        </div>
      );
    }

    if (this.state.error) {
      rooms = (
        <div className="column">
          <p style={{ textAlign: "center" }}>Something went wrong!</p>
        </div>
      );
    }

    if (this.state.rooms) {
      rooms = this.state.rooms.map(room => {
        return (
          <div className="column is-one-third" key={room.id}>
            <SingleRoom room={room} />
          </div>
        );
      });
    }

    return (
      <div className="roomsListing">
        <h1>Rooms Listing</h1>

        <div className="columns is-multiline">{rooms}</div>
      </div>
    );
  }
}

export default Rooms;
