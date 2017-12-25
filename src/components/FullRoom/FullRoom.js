import React, { Component } from "react";

import axios from "../../axios";

import Spinner from "../../UI/Spinner/Spinner";
import Aux from "../../hoc/Aux/Aux";
import Preview from "../Preview/Preview";

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
      let roomDetails = (
        <div className="column is-half">
          <table>
            <thead>
              <tr>
                <th>Room details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.room.type ? (
                <tr>
                  <td>Room Type</td>
                  <td>{this.state.room.type}</td>
                </tr>
              ) : null}
              {this.state.room.bathrooms ? (
                <tr>
                  <td>Bathroom</td>
                  <td>{this.state.room.bathrooms}</td>
                </tr>
              ) : null}
              {this.state.room.furnishings ? (
                <tr>
                  <td>Furnishing</td>
                  <td>{this.state.room.furnishings}</td>
                </tr>
              ) : null}
              {this.state.room.min ? (
                <tr>
                  <td>Min length of stay</td>
                  <td>{this.state.room.min}</td>
                </tr>
              ) : null}
              {this.state.room.max ? (
                <tr>
                  <td>Max length of stay</td>
                  <td>{this.state.room.max}</td>
                </tr>
              ) : null}
              {this.state.room.gender ? (
                <tr>
                  <td>Gender</td>
                  <td>{this.state.room.gender}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      );

      let roomCharges = (
        <div className="column is-half">
          <table>
            <thead>
              <tr>
                <th>Charges for the room</th>
              </tr>
            </thead>
            <tbody>
              {this.state.room.rent ? (
                <tr>
                  <td>Weekly rent</td>
                  <td> ${this.state.room.rent}</td>
                </tr>
              ) : null}
              {this.state.room.rent ? (
                <tr>
                  <td>Bond</td>
                  <td>{this.state.room.bond}</td>
                </tr>
              ) : null}

              {this.state.room.bills ? (
                <tr>
                  <td>Bills</td>
                  <td>{this.state.room.bills}</td>
                </tr>
              ) : null}
              {this.state.room.internet ? (
                <tr>
                  <td>Internet</td>
                  <td>{this.state.room.internet}</td>
                </tr>
              ) : null}
              {this.state.room.parking ? (
                <tr>
                  <td>Parking</td>
                  <td>{this.state.room.parking}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      );

      fullRoom = (
        <div className="fullRoom">
          <div className="titles">
            <h1 className="title">{this.state.room.address}</h1>
            <p className="subtitle">
              {this.state.room.roomType === "shared" ? "Shared room" : null}
              {this.state.room.bathroomType === "shared"
                ? " with shared bathroom"
                : null}
            </p>
          </div>

          <div className="details">
            <div className="columns">
              <div className="column">
                <Preview
                  bedrooms={this.state.room.bedrooms}
                  bathrooms={this.state.room.bathrooms}
                  persons={this.state.room.persons}
                />
              </div>
            </div>

            <div className="columns">
              {roomDetails}
              {roomCharges}
            </div>

            <div className="columns">
              {this.state.room.description ? (
                <div className="column">
                  <h2>Description</h2>
                  <p>{this.state.room.description}</p>
                </div>
              ) : null}

              {this.state.room.flatmates ? (
                <div className="column">
                  <h2>Flatbuddies</h2>
                  <p>{this.state.room.flatmates}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      );
    }

    return <Aux>{fullRoom}</Aux>;
  }
}

export default FullRoom;

/**/
