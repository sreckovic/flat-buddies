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
    type: "",
    bedrooms: "",
    bathrooms: "",
    persons: "",
    internet: "",
    parking: "",
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

  handleChange = (event, propertyName) => {
    this.setState({ [propertyName]: event.target.value });
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
              <div className="field">
                <Input
                  handleChange={this.handleChange}
                  value={this.address}
                  type="text"
                  name="address"
                  placeholder="Property address"
                />
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field">
                <Select
                  name="type"
                  value={this.state.type}
                  values={[
                    { value: "0", label: "Type of property" },
                    { value: "1", label: "House" },
                    { value: "2", label: "Flat" }
                  ]}
                />
              </div>

              <div className="field">
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

              <div className="field">
                <Select
                  name="bathrooms"
                  values={[
                    { value: "0", label: "Total bathrooms" },
                    { value: "1", label: "1 bathroom" },
                    { value: "2", label: "2 bathrooms" },
                    { value: "3", label: "3 bathrooms" },
                    { value: "4", label: "4+ bathrooms" }
                  ]}
                />
              </div>
            </div>

            <div className="column">
              <div className="field">
                <Select
                  name="persons"
                  values={[
                    { value: "0", label: "Total persons" },
                    { value: "1", label: "1 person" },
                    { value: "2", label: "2 persons" },
                    { value: "3", label: "3 persons" },
                    { value: "4", label: "4 persons" },
                    { value: "5", label: "5 persons" },
                    { value: "6", label: "6 persons" },
                    { value: "7", label: "7+ persons" }
                  ]}
                />
              </div>

              <div className="field">
                <Select
                  name="internet"
                  values={[
                    { value: "0", label: "Is internet avaiable?" },
                    { value: "unlimited", label: "Unlimited included in rent" },
                    { value: "included", label: "Included in rent" },
                    {
                      value: "avaiable",
                      label: "Avaiable but not included in rent"
                    },
                    { value: "no", label: "Not avaiable" }
                  ]}
                />
              </div>

              <div className="field">
                <Select
                  name="parking"
                  values={[
                    { value: "0", label: "Is parking avaiable?" },
                    { value: "no", label: "No parking" },
                    { value: "off-street", label: "Off-street parking" },
                    { value: "on-street", label: "On-street parking" }
                  ]}
                />
              </div>
            </div>
          </div>

          <h3>About the room</h3>

          <h3>Accepting</h3>

          <div className="field">
            <label className="label">
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
            <label className="label">
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
            <button className="button is-primary">Create your listing</button>
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
