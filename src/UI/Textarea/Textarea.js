import React from "react";

const textarea = props => (
  <div>
    <textarea
      className="textarea"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  </div>
);

export default textarea;
