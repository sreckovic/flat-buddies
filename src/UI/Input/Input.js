import React from "react";

const input = props => (
  <div className="field">
    <div className="control">
      <input
        className="input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.address}
        onChange={props.handleChange}
      />
    </div>
  </div>
);

export default input;
