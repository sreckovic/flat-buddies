import React from "react";

const input = props => (
  <div className="field">
    <div className="control">
      <input
        className="input"
        placeholder={props.placeholder ? props.placeholder : null}
        type={props.type ? props.type : "text"}
        name={props.name}
        value={props.value}
        onChange={event => props.handleChange(event)}
      />
    </div>
  </div>
);

export default input;
