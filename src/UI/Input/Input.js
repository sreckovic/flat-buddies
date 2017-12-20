import React from "react";

const input = props => (
  <div className="field">
    <div className={props.icon ? "control has-icons-left" : "control"}>
      <input
        className={"input " + props.validation}
        placeholder={props.placeholder ? props.placeholder : null}
        type={props.type ? props.type : "text"}
        name={props.name}
        value={props.value}
        onChange={event => props.handleChange(event)}
      />
      {props.icon ? (
        <span className="icon is-small is-left">
          <i className={"fa " + props.icon} aria-hidden="true" />
        </span>
      ) : null}
    </div>
  </div>
);

export default input;
