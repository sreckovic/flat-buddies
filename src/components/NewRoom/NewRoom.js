import React, { Component } from "react";
import axios from "../../axios";

// import Aux from "../../hoc/Aux/Aux";
import Select from "../../UI/Select/Select";
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/Textarea/Textarea";
import Tags from "../../UI/Tags/Tags";

import fields from "./fields";

import "./NewRoom.css";

// todo: Google maps API

class NewRoom extends Component {
  state = {
    address: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    persons: "",
    internet: "",
    parking: "",
    rent: null,
    bills: "",
    bond: "",
    roomType: "",
    furnishings: "",
    bathroomType: "",
    gender: "",
    min: 0,
    max: 0,

    students: false,

    description: "",
    flatmates: "",
    submitted: false
  };

  postHandler = event => {
    const newRoom = {
      address: this.state.address,
      type: this.state.type,
      bedrooms: this.state.bedrooms,
      bathrooms: this.state.bathrooms,
      persons: this.state.persons,
      internet: this.state.internet,
      parking: this.state.parking,

      rent: this.state.rent,
      bills: this.state.bills,
      bond: this.state.bond,
      roomType: this.state.roomType,
      furnishings: this.state.furnishings,
      bathroomType: this.state.bathroomType,
      gender: this.state.gender,
      min: this.state.min,
      max: this.state.max,

      students: this.state.students,

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

    event.preventDefault();
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="addNewRoom">
        <h2>Add new listing</h2>
        <p>Room(s) in an existing share house</p>

        <form onSubmit={this.postHandler}>
          <h3>About the property</h3>

          <div className="columns">
            <div className="column">
              <Input
                name="address"
                placeholder="Property address"
                handleChange={this.handleChange}
                value={this.address}
              />
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <Select
                name="type"
                handleChange={this.handleChange}
                value={this.state.type}
                options={fields.type}
              />

              <Select
                name="bedrooms"
                handleChange={this.handleChange}
                value={this.state.bedrooms}
                options={fields.bedrooms}
              />

              <Select
                name="bathrooms"
                handleChange={this.handleChange}
                value={this.state.bathrooms}
                options={fields.bathrooms}
              />
            </div>

            <div className="column">
              <Select
                name="persons"
                handleChange={this.handleChange}
                value={this.state.persons}
                options={fields.persons}
              />

              <Select
                name="internet"
                handleChange={this.handleChange}
                value={this.state.internet}
                options={fields.internet}
              />

              <Select
                name="parking"
                handleChange={this.handleChange}
                value={this.state.parking}
                options={fields.parking}
              />
            </div>
          </div>

          <h3>About the room</h3>

          <div className="columns">
            <div className="column">
              <Input
                name="rent"
                placeholder="Weekly rent"
                handleChange={this.handleChange}
                value={this.rent}
              />

              <Select
                name="bills"
                handleChange={this.handleChange}
                value={this.state.bills}
                options={fields.bills}
              />

              <Select
                name="bond"
                handleChange={this.handleChange}
                value={this.state.bond}
                options={fields.bond}
              />

              <Select
                name="roomType"
                handleChange={this.handleChange}
                value={this.state.roomType}
                options={fields.roomType}
              />

              <Select
                name="furnishings"
                handleChange={this.handleChange}
                value={this.state.furnishings}
                options={fields.furnishings}
              />
            </div>

            <div className="column">
              <Select
                name="bathroomType"
                handleChange={this.handleChange}
                value={this.state.bathroomType}
                options={fields.bathroomType}
              />

              <Select
                name="gender"
                handleChange={this.handleChange}
                value={this.state.gender}
                options={fields.gender}
              />

              <Select
                name="min"
                handleChange={this.handleChange}
                value={this.state.min}
                options={fields.min}
              />

              <Select
                name="max"
                handleChange={this.handleChange}
                value={this.state.max}
                options={fields.max}
              />
            </div>
          </div>

          <h3>Accepting</h3>

          <div className="columns">
            <div className="column">
              <Tags />

              <label className="checkbox">
                <input
                  type="checkbox"
                  name="students"
                  checked={this.state.students}
                  onChange={this.handleChange}
                />
                Students OK
              </label>
            </div>
          </div>

          <div className="field">
            <label flatmates="description" className="label">
              What's great about living in this property?
            </label>
            <TextArea
              name="description"
              placeholder="What's great about living in this property?"
              value={this.state.description}
              handleChange={this.handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="flatmates" className="label">
              Details about you and your flatmates
            </label>
            <TextArea
              name="flatmates"
              placeholder="Details about you and your flatmates"
              value={this.state.flatmates}
              handleChange={this.handleChange}
            />
          </div>

          <div className="field">
            <button className="button is-link">Create your listing</button>
          </div>
        </form>

        {/*<p>
          I have authority to rent this room and I'm complying with tenancy
          laws, local planning rules and building strata rules.
        </p>*/}
      </div>
    );
  }
}

export default NewRoom;
