import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Aux from "../../hoc/Aux/Aux";
import Header from "../../components/Header/Header";
import Rooms from "../Rooms/Rooms";
import SingleRoom from "../../components/SingleRoom/SingleRoom";
import NewRoom from "../../components/NewRoom/NewRoom";
import Footer from "../../components/Footer/Footer";

class Catalogue extends Component {
  state = {
    auth: true,
    rooms: []
  };

  render() {
    return (
      <Aux>
        <div className="section">
          <Header />
        </div>

        <div className="section">
          <Switch>
            {this.state.auth ? (
              <Route path="/add-listing" component={NewRoom} />
            ) : null}

            <Route path="/rooms/:id" exact component={SingleRoom} />
            <Route path="/rooms" exact component={Rooms} />
            <Route path="/" exact component={Rooms} />

            {<Route render={() => <h1>Not found</h1>} />}
          </Switch>
        </div>

        <div className="section">
          <Footer />
        </div>
      </Aux>
    );
  }
}

export default Catalogue;
