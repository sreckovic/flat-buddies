import React, { Component } from "react";
import axios from "../../axios";

import Aux from "../../hoc/Aux/Aux";
import Select from "../../UI/Select/Select";
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/Textarea/Textarea";

import "./NewRoom.css";

// todo: Google maps API

class NewRoom extends Component {
  state = {
    address: "",
    type: null,
    submitted: false
  };

  handleChange = event => {
    this.setState({ address: event.target.value });
  };

  postHandler = event => {
    const newRoomData = {
      address: this.state.address,
      type: this.state.type
    };

    console.log(newRoomData);

    axios
      .post("/rooms.json", newRoomData)
      .then(response => {
        console.log(response);
        this.setState({ submitted: false });
        // this.props.history.replace("/posts");
        // this.props.history.push("/posts");
        // this.setState({ submitted: true });
      })
      .catch(error => this.setState({ loading: false, purchasing: false }));

    event.preventDefault();
  };

  render() {
    return (
      <Aux>
        <h2>Add new listing</h2>
        <p>Room(s) in an existing share house</p>

        <form onSubmit={this.postHandler} className="addNewRome">
          <h3>About the property</h3>

          <Input
            handleChange={this.handleChange}
            value={this.address}
            type="text"
            name="address"
            placeholder="Property address"
          />

          <Select />

          <h3>About the property</h3>

          <h3>About the room</h3>

          <h3>Accepting</h3>

          <label>What's great about living in this property?</label>
          <div>
            <TextArea />
          </div>

          <label>Details about you and your flatmates</label>
          <div>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </div>
          <button>Create your listing</button>
        </form>
      </Aux>
    );
  }
}

export default NewRoom;
