import React from "react";

const select = props => {
  return (
    <div className="field">
      <div className="control">
        <div className="select">
          <select
            name={props.name}
            value={props.value}
            onChange={event => props.handleChange(event, props.name)}
          >
            {props.options.map((option, i) => {
              return (
                <option key={i} value={option.value} label={option.label} />
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default select;
