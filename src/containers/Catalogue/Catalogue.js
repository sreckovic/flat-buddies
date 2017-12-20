import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import provider and auth that we exported from src/client.js
import { provider, auth } from "../../client";

import Aux from "../../hoc/Aux/Aux";
import Header from "../../components/Header/Header";
import Rooms from "../Rooms/Rooms";
import FullRoom from "../../components/FullRoom/FullRoom";
import NewRoom from "../../components/NewRoom/NewRoom";
import Footer from "../../components/Footer/Footer";

class Catalogue extends Component {
  state = {
    user: null,
    auth: true,
    rooms: []
  };

  /*
  async componentWillMount() {
    const user = await auth.onAuthStateChanged();
    if (user) this.setState({ user });
  }
  */

  async login() {
    const result = await auth().signInWithPopup(provider);
    this.setState({ user: result.user });
  }

  logout() {
    // await auth().signOut()
    auth().signOut();
    this.setState({ user: null });
  }

  render() {
    return (
      <Aux>
        <div className="section">
          <Header />
          <p>
            {this.state.user ? "Hi, ${this.state.user.displayName}!" : "Hi!"}
          </p>
          <button onClick={this.login.bind(this)}>Login with Facebook</button>
          <button onClick={this.logout.bind(this)}>Logout</button>
        </div>

        <div className="section">
          <div className="container">
            <Switch>
              {this.state.auth ? (
                <Route path="/add-listing" component={NewRoom} />
              ) : null}

              <Route path="/room/:id" exact component={FullRoom} />
              <Route path="/rooms" exact component={Rooms} />
              <Route path="/" exact component={Rooms} />

              {<Route render={() => <h1>Not found</h1>} />}
            </Switch>
          </div>
        </div>

        <div className="section">
          <Footer />
        </div>
      </Aux>
    );
  }
}

export default Catalogue;
