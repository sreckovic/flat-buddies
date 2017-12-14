import React from "react";

const select = props => {
  return (
    <div className="field">
      <div className="control">
        <div className="select">
          <select name="">
            <option value="" selected>
              Type of property
            </option>
            <option value="">House</option>
            <option value="">Flat</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default select;
