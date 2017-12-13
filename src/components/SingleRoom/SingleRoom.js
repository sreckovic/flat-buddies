import React from "react";

import { Link } from "react-router-dom";

import "./SingleRoom.css";

const flat = props => {
  return (
    <div className="room">
      <Link to={"/rooms/" + props.room.id}>
        <h3>
          {props.room.suburb}, {props.room.city}
        </h3>

        <p>Available from {props.room.available}</p>
        <p>
          {props.room.roomtype} with {props.room.bathroom}
        </p>
        <p>
          {props.room.furnishing}
          {props.room.length_of_stay}
          {props.room.gender}
        </p>
      </Link>
    </div>
  );
};

export default flat;
