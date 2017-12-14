import React from "react";

const textarea = props => (
  <div className="field">
    <div className="control">
      <textarea
        name={props.name}
        className="textarea"
        placeholder={props.placeholder}
        value={props.value}
        onChange={event => props.handleChange(event, props.name)}
      />
    </div>
  </div>
);

export default textarea;
