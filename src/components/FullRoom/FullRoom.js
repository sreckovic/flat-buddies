import React, { Component } from "react";

import axios from "../../axios";

class FullRoom extends Component {
  state = {
    room: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.loadData();

    console.log(this.state.room);
  }

  componentDidUpdate() {
    //this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      axios
        .get("/rooms/" + this.props.match.params.id + ".json")
        .then(response => {
          console.log(response);
          this.setState({ room: response.data });
        })
        .catch(error => {
          this.setState({ loading: false, error: true });
          console.log(error);
        });
    }
  }

  render() {
    return <div>Single Full room view -></div>;
  }
}

export default FullRoom;

/*props.room.available ? (
      <p>Available from {props.room.available}</p>
    ) : null*/
