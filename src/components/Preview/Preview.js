import React from "react";

import "./Preview.css";

const preview = props => {
  return (
    <ul className="previewIcons">
      {props.bedrooms ? (
        <li>
          <i className="fa fa-bed" aria-hidden="true" />
          {props.bedrooms}
        </li>
      ) : null}
      {props.bathrooms ? (
        <li>
          <i className="fa fa-bath" aria-hidden="true" />
          {props.bathrooms}
        </li>
      ) : null}
      {props.persons ? (
        <li>
          <i className="fa fa-users" aria-hidden="true" />
          {props.persons}
        </li>
      ) : null}
    </ul>
  );
};

export default preview;
