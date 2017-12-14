import React from "react";

const select = props => {
  return (
    <div className="control">
      <div className="select">
        <select name={props.name} value="">
          {props.values.map((option, i) => {
            return <option key={i} value={option.value} label={option.label} />;
          })}
        </select>
      </div>
    </div>
  );
};

export default select;
