import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Aux from "../../hoc/Aux/Aux";
import Header from "../../components/Header/Header";
import Rooms from "../Rooms/Rooms";
import NewRoom from "../../components/NewRoom/NewRoom";

class Catalogue extends Component {
  state = {
    auth: true,
    rooms: []
  };

  render() {
    return (
      <Aux>
        <Header />
        <Switch>
          {this.state.auth ? (
            <Route path="/add-listing" component={NewRoom} />
          ) : null}

          <Route path="/rooms" component={Rooms} />
          <Route path="/" exact component={Rooms} />

          {<Route render={() => <h1>Not found</h1>} />}
        </Switch>
      </Aux>
    );
  }
}

export default Catalogue;
