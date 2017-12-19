import React, { Component } from "react";

import axios from "../../axios";

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
          console.log(response);
          this.setState({ room: response.data });
          console.log(this.state.room);
        })
        .catch(error => {
          this.setState({ loading: false, error: true });
          console.log(error);
        });
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <h1>Single Full room view</h1>
        <p />
        {/*this.room.available ? (
          <p>Available from {this.room.available}</p>
        ) : null*/}
      </div>
    );
  }
}

export default FullRoom;

/**/
