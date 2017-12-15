import React from "react";

import { Link } from "react-router-dom";

import "./SingleRoom.css";

const flat = props => {
  return (
    <div className="room">
      <Link to={"/rooms/" + props.room.id}>
        <h3>
          {/*{props.room.suburb}, {props.room.city}*/}
          {props.room.address}
        </h3>

        <p>Available from {props.room.available}</p>
        <p>
          {props.room.type} with {props.room.bathrooms}
        </p>
        <p>
          {props.room.furnishing}
          {props.room.length_of_stay}
          {props.room.gender}
        </p>
        <p>{props.room.description}</p>
      </Link>
    </div>
  );
};

export default flat;
