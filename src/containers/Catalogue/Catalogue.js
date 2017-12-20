import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import provider and auth that we exported from src/firebase.js
import { auth, providerGoogle, providerFacebook } from "../../firebase";

import Aux from "../../hoc/Aux/Aux";
import Header from "../../components/Header/Header";
import Rooms from "../Rooms/Rooms";
import FullRoom from "../../components/FullRoom/FullRoom";
import NewRoom from "../../components/NewRoom/NewRoom";
import Footer from "../../components/Footer/Footer";

class Catalogue extends Component {
  state = {
    username: "",
    user: null,
    auth: false,
    rooms: []
  };

  /*
  async componentWillMount() {
    const username = await auth.onAuthStateChanged();
    if (username) this.setState({ username });
  }
  */

  /*
  async login() {
    const result = await auth().signInWithPopup(providerGoogle);
    this.setState({ username: result.username });
  }

  logout() {
    // await auth().signOut()
    auth().signOut();
    this.setState({ username: null });
  }
  */

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  loginHandler = () => {
    auth()
      .signInWithPopup(providerGoogle)
      .then(result => {
        const user = result.user;
        this.setState({
          user: user
        });
      });
  };

  logoutHandler = () => {
    auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  };

  render() {
    return (
      <Aux>
        <div className="section">
          <Header
            user={this.state.user}
            login={this.loginHandler}
            logout={this.logoutHandler}
          />
        </div>

        <div className="section">
          <div className="container">
            <Switch>
              {this.state.user ? (
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
