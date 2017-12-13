import React from "react";

const input = props => (
  <div>
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.address}
      onChange={props.handleChange}
    />
  </div>
);

export default input;
