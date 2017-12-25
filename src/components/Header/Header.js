import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const header = props => {
  let logUser;

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

  // console.log(props.user);

  return (
    <header className="header">
      <div className="section">
        <div className="container is-clearfix">
          <div className="branding">
            <h2>
              <Link to={"/"}>FlatBuddies.co</Link>
            </h2>
            <p className="subtitle">Share accommodation website.</p>
          </div>

          <div className="mainMenu">
            <ul>
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
              {props.user ? (
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
              ) : null}
            </ul>
          </div>

          <div className="userProfile">
            <ul>
              {props.user ? <li>Hi {props.user.displayName}!</li> : null}

              {logUser}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
