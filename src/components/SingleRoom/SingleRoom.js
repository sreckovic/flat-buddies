import React from "react";

import { Link } from "react-router-dom";

import "./SingleRoom.css";

const singleRoom = props => {
  let address, type, desc;

  if (props.room.address) {
    address = (
      <h3>
        <Link to={"/rooms/" + props.room.id}>{props.room.address}</Link>
      </h3>
    );
  } else {
    address = null;
  }

  if (props.room.type && props.room.bathrooms) {
    type = (
      <p className="desc">
        {props.room.type} with {props.room.bathrooms}
      </p>
    );
  } else {
    type = null;
  }

  if (props.room.description) {
    desc = (
      <p className="abstract">
        <Link to={"/rooms/" + props.room.id}>
          {props.room.description.substring(0, 120) + "..."}
        </Link>
      </p>
    );
  } else {
    desc = null;
  }

  return (
    <div className="singleRoom">
      {address}
      {type}
      {desc}

      <p>
        {props.room.furnishing}
        {props.room.length_of_stay}
        {props.room.gender}
      </p>
    </div>
  );
};

export default singleRoom;
