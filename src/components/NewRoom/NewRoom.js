import React, { Component } from "react";
import axios from "../../axios";

// import Aux from "../../hoc/Aux/Aux";
import Select from "../../UI/Select/Select";
import Input from "../../UI/Input/Input";
import TextArea from "../../UI/Textarea/Textarea";
import Tags from "../../UI/Tags/Tags";

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
      flatmates: this.state.flatmates,

      rent: this.state.rent,
      bills: this.state.bills,
      bond: this.state.bond,
      roomType: this.state.roomtype,
      furnishings: this.state.furnishings,
      bathroomType: this.state.bathroomType,
      gender: this.state.gender,
      min: this.state.min,
      max: this.state.max
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
                  type="text"
                  name="address"
                  placeholder="Property address"
                  handleChange={this.handleChange}
                  value={this.address}
                />
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="field">
                <Select
                  name="type"
                  handleChange={this.handleChange}
                  value={this.state.type}
                  options={[
                    { value: "0", label: "Type of property" },
                    { value: "house", label: "House" },
                    { value: "flat", label: "Flat" }
                  ]}
                />
              </div>

              <div className="field">
                <Select
                  name="bedrooms"
                  handleChange={this.handleChange}
                  value={this.state.bedrooms}
                  options={[
                    { value: "0", label: "Total bedrooms" },
                    { value: "2", label: "2 bed property" },
                    { value: "3", label: "3 bed property" },
                    { value: "4", label: "4 bed property" },
                    { value: "5", label: "5 bed property" },
                    { value: "6", label: "6+ bed property" }
                  ]}
                />
              </div>

              <div className="field">
                <Select
                  name="bathrooms"
                  handleChange={this.handleChange}
                  value={this.state.bathrooms}
                  options={[
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
                  handleChange={this.handleChange}
                  value={this.state.persons}
                  options={[
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
                  handleChange={this.handleChange}
                  value={this.state.internet}
                  options={[
                    { value: "0", label: "Is internet avaiable?" },
                    { value: "unlimited", label: "Unlimited included in rent" },
                    { value: "included", label: "Included in rent" },
                    {
                      value: "avaiable",
                      label: "Avaiable but not included in rent"
                    },
                    { value: "not avaiable", label: "Not avaiable" }
                  ]}
                />
              </div>

              <div className="field">
                <Select
                  name="parking"
                  handleChange={this.handleChange}
                  value={this.state.parking}
                  options={[
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

          <div className="columns">
            <div className="column">
              <Input
                type="text"
                name="rent"
                placeholder="Weekly rent"
                handleChange={this.handleChange}
                value={this.rent}
              />

              <Select
                name="bills"
                handleChange={this.handleChange}
                value={this.state.bills}
                options={[
                  { value: "0", label: "Bills are" },
                  { value: "excluded", label: "Additional to the rent" },
                  { value: "included", label: "Included in the rent" },
                  {
                    value: "some",
                    label: "Some are included in rent"
                  }
                ]}
              />

              <Select
                name="bond"
                handleChange={this.handleChange}
                value={this.state.bond}
                options={[
                  { value: "0", label: "Bond" },
                  { value: "0", label: "No security bond" },
                  { value: "1", label: "One week rent" },
                  { value: "2", label: "Two weeks rent" },
                  { value: "3", label: "Three weeks rent" },
                  { value: "4", label: "Four weeks rent" }
                ]}
              />

              <Select
                name="roomType"
                handleChange={this.handleChange}
                value={this.state.roomType}
                options={[
                  { value: "0", label: "Room type" },
                  { value: "private", label: "Private" },
                  { value: "shared", label: "Room shared with others" }
                ]}
              />

              <Select
                name="furnishings"
                handleChange={this.handleChange}
                value={this.state.furnishings}
                options={[
                  { value: "0", label: "Furnishings" },
                  { value: "furnished", label: "Furnished" },
                  { value: "unfurnished", label: "Unfurnished" },
                  { value: "flexible", label: "Flexible with furnishings" }
                ]}
              />
            </div>

            <div className="column">
              <Select
                name="bathroomType"
                handleChange={this.handleChange}
                value={this.state.bathroomType}
                options={[
                  { value: "0", label: "Bathroom type" },
                  { value: "shared", label: "Shared bathroom" },
                  { value: "own", label: "Own bathroom" },
                  { value: "ensuite", label: "Ensuite bathroom" }
                ]}
              />

              <Select
                name="gender"
                handleChange={this.handleChange}
                value={this.state.gender}
                options={[
                  { value: "0", label: "Preferred gender" },
                  { value: "all", label: "Anyone welcome" },
                  { value: "females", label: "Females" },
                  { value: "anyone", label: "Females & Males (no couples)" },
                  { value: "couples", label: "Couples" }
                ]}
              />

              <Select
                name="min"
                handleChange={this.handleChange}
                value={this.state.min}
                options={[
                  { value: "0", label: "No min stay" },
                  { value: "1", label: "1 week min" },
                  { value: "2", label: "2 weeks min" },
                  { value: "3", label: "3 weeks min" },
                  { value: "4", label: "4 weeks min" },
                  { value: "8", label: "2 months min" },
                  { value: "12", label: "3 months min" },
                  { value: "16", label: "4 months min" },
                  { value: "20", label: "5 months min" },
                  { value: "24", label: "6 months min" },
                  { value: "48", label: "1 year min" }
                ]}
              />

              <Select
                name="max"
                handleChange={this.handleChange}
                value={this.state.max}
                options={[
                  { value: "0", label: "No max stay" },
                  { value: "1", label: "1 week max" },
                  { value: "2", label: "2 weeks max" },
                  { value: "3", label: "3 weeks max" },
                  { value: "4", label: "4 weeks max" },
                  { value: "8", label: "2 months max" },
                  { value: "12", label: "3 months max" },
                  { value: "16", label: "4 months max" },
                  { value: "20", label: "5 months max" },
                  { value: "24", label: "6 months max" },
                  { value: "48", label: "1 year max" }
                ]}
              />
            </div>
          </div>

          <h3>Accepting</h3>

          <div className="columns">
            <div className="column">
              <Tags />
            </div>
          </div>

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
