import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const header = props => {
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
              {props.user ? (
                <li>
                  <a onClick={props.logout}>Logout</a>
                </li>
              ) : (
                <li>
                  <a onClick={props.login}>Login with Google</a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default header;
