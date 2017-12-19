import React, { Component } from "react";

import axios from "../../axios";

import Spinner from "../../UI/Spinner/Spinner";
import Aux from "../../hoc/Aux/Aux";

import "./FullRoom.css";

class FullRoom extends Component {
  state = {
    room: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);

    if (this.props.match.params.id) {
      axios
        .get("/rooms/" + this.props.match.params.id + ".json")
        .then(response => {
          this.setState({ room: response.data, loading: false });
        })
        .catch(error => {
          this.setState({ loading: false, error: true });
          console.log(error);
        });
    }
  }

  componentDidUpdate() {}

  render() {
    let fullRoom = null;

    if (this.state.loading) {
      fullRoom = <Spinner />;
    }

    if (this.state.error) {
      fullRoom = <p style={{ textAlign: "center" }}>Something went wrong...</p>;
    }

    if (this.state.room) {
      fullRoom = (
        <div className="fullRoom">
          <h1>{this.state.room.address}</h1>
          <p />
          {/*this.room.available ? (
          <p>Available from {this.state.room.available}</p>
        ) : null*/}
        </div>
      );
    }

    return <Aux>{fullRoom}</Aux>;
  }
}

export default FullRoom;

/**/
