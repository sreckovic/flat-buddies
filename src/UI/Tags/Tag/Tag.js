import React from "react";

import "./Tag.css";

const tag = props => {
  return (
    <div className="control">
      <div className="tags has-addons">
        <a className="tag is-delete is-medium" aria-hidden="true" />
        <span className="tag is-medium">Technology</span>
      </div>
    </div>
  );
};

export default tag;
