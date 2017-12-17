import React from "react";

const textarea = props => (
  <div className="field">
    <div className="control">
      <textarea
        className="textarea"
        placeholder={props.placeholder ? props.placeholder : null}
        name={props.name}
        value={props.value}
        onChange={event => props.handleChange(event)}
      />
    </div>
  </div>
);

export default textarea;
