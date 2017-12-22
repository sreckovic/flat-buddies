import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

// import provider and auth that we exported from src/firebase.js
import { auth, providerFacebook } from "../../firebase";

import Aux from "../../hoc/Aux/Aux";
import Header from "../../components/Header/Header";
import Rooms from "../Rooms/Rooms";
import FullRoom from "../../components/FullRoom/FullRoom";
import NewRoom from "../../components/NewRoom/NewRoom";
import Footer from "../../components/Footer/Footer";

import "./Catalogue.css";

class Catalogue extends Component {
  state = {
    username: "",
    user: null,
    auth: false,
    token: null,
    errorCode: null,
    errorMessage: null,
    errorEmail: null,
    credential: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  loginHandler = () => {
    auth
      .signInWithPopup(providerFacebook)
      .then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        this.setState({
          user: user,
          token: token
        });
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        // The email of the user's account used.
        const email = error.email;

        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;

        this.setState({
          errorCode: errorCode,
          errorMessage: errorMessage,
          errorEmail: email,
          credential: credential
        });
      });
  };

  logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        this.setState({
          user: null
        });
      })
      .catch(error => {
        // An error happened.
      });
  };

  render() {
    /*
    const RoomsWithProps = props => {
      return <Rooms user={this.state.user} />;
    };

    const renderMergedProps = (component, ...rest) => {
      const finalProps = Object.assign({}, ...rest);
      return React.createElement(component, finalProps);
    };

    const PropsRoute = ({ component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
          }}
        />
      );
    };
    */

    let addListing = null;

    if (this.state.user) {
      addListing = (
        <ul className="addListing">
          <li>
            <NavLink
              className="button is-primary is-rounded"
              to={{
                pathname: "/add-listing"
                //hash: "#submit",
                //search: "?quick-submit=true"
              }}
            >
              <span className="icon">
                <i className="fa fa-plus" aria-hidden="true" />
              </span>
              <span>List my place</span>
            </NavLink>
          </li>
        </ul>
      );
    }

    return (
      <Aux>
        <Header
          user={this.state.user}
          login={this.loginHandler}
          logout={this.logoutHandler}
        />

        <div className="section">
          <div className="container">
            {addListing}

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

        <Footer />
      </Aux>
    );
  }
}

export default Catalogue;
