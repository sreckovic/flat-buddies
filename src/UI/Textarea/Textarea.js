import React from "react";

const textarea = props => (
  <div>
    <textarea value={props.value} onChange={props.handleChange} />
  </div>
);

export default textarea;
