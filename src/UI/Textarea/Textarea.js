import React from "react";

const textarea = props => (
  <div className="field">
    <div className="control">
      <textarea
        className="textarea"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  </div>
);

export default textarea;
