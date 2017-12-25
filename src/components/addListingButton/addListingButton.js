import React from "react";
import { NavLink } from "react-router-dom";

import "./AddListingButton.css";

const addListingButton = props => {
  return (
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
};

export default addListingButton;
