import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const header = props => {
  let logUser, addListing;

  if (props.user) {
    logUser = (
      <li>
        <a onClick={props.logout}>
          <i className="fa fa-sign-out" aria-hidden="true" /> Logout
        </a>
      </li>
    );
  } else {
    logUser = (
      <li>
        <a onClick={props.login} title="Login with Facebook">
          <i className="fa fa-facebook-square" aria-hidden="true" /> Login
        </a>
      </li>
    );
  }

  if (props.user) {
    addListing = (
      <li>
        <NavLink
          to={{
            pathname: "/add-listing"
            //hash: "#submit",
            //search: "?quick-submit=true"
          }}
        >
          List my place
        </NavLink>
      </li>
    );
  } else {
    addListing = null;
  }

  return (
    <header className="header">
      <div className="container">
        <h2>
          <Link to={"/"}>FlatBuddies.co</Link>
        </h2>
        <p className="subtitle">Share accommodation website.</p>

        <nav className="navbar" aria-label="main navigation">
          <div className="navbar-menu is-active">
            <ul>
              {props.user ? <li>Hi {props.user.displayName}!</li> : null}
              <li>
                <NavLink
                  to="/rooms/"
                  exact
                  // activeClassName="my-active"
                  // activeStyle={{ color: "#fa923f", textDecoration: "underline" }}
                >
                  Rooms
                </NavLink>
              </li>
              {addListing}
              {logUser}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default header;
