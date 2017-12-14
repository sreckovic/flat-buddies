import React, { Component } from "react";
import axios from "../../axios";

// import Aux from "../../hoc/Aux/Aux";
import Select from "../../UI/Select/Select";
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/Textarea/Textarea";

import "./NewRoom.css";

// todo: Google maps API

class NewRoom extends Component {
  state = {
    address: "",
    type: null,
    description: "",
    flatmates: "",
    submitted: false
  };

  handleChange = (event, propertyName) => {
    this.setState({ propertyName: event.target.value });
  };

  postHandler = e => {
    const newRoom = {
      address: this.state.address,
      type: this.state.type,
      description: this.state.description,
      flatmates: this.state.flatmates
    };

    console.log(newRoom);

    axios
      .post("/rooms.json", newRoom)
      .then(response => {
        console.log(response);
        this.setState({ submitted: true });
        // this.props.history.replace("/posts");
        // this.props.history.push("/posts");
      })
      .catch(error => this.setState({ submitted: false }));

    e.preventDefault();
  };

  render() {
    return (
      <div className="addNewRoom">
        <h2>Add new listing</h2>
        <p>Room(s) in an existing share house</p>

        <form onSubmit={this.postHandler}>
          <h3>About the property</h3>

          <Input
            handleChange={this.handleChange}
            value={this.address}
            type="text"
            name="address"
            placeholder="Property address"
          />
          <div className="field">
            <Select
              name="type"
              values={[
                { value: "0", label: "Type of property" },
                { value: "1", label: "House" },
                { value: "2", label: "Flat" }
              ]}
            />

            <Select
              name="bedrooms"
              values={[
                { value: "0", label: "Total bedrooms" },
                { value: "1", label: "2 bed property" },
                { value: "2", label: "3 bed property" },
                { value: "3", label: "4 bed property" },
                { value: "4", label: "5 bed property" },
                { value: "5", label: "6+ bed property" }
              ]}
            />
          </div>

          <h3>About the property</h3>

          <h3>About the room</h3>

          <h3>Accepting</h3>

          <label className="label">
            What's great about living in this property?
          </label>
          <TextArea
            placeholder="What's great about living in this property?"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <label className="label">Details about you and your flatmates</label>
          <TextArea
            placeholder="Details about you and your flatmates"
            value={this.state.flatmates}
            onChange={this.handleChange}
          />
          <button className="button is-primary">Create your listing</button>
        </form>
      </div>
    );
  }
}

export default NewRoom;
