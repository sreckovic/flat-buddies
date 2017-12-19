import React from "react";

import { Link } from "react-router-dom";

import "./SingleRoom.css";
import temp_img from "../../assets/images/Screen Shot 2017-12-19 at 3.07.35 PM.png";

const singleRoom = props => {
  let img, address, type, desc;

  if (temp_img) {
    img = (
      <Link to={"/room/" + props.room.id}>
        <img src={temp_img} />
      </Link>
    );
  } else {
    img = null;
  }

  if (props.room.address) {
    address = (
      <h2>
        <Link to={"/room/" + props.room.id}>{props.room.address}</Link>
      </h2>
    );
  } else {
    address = null;
  }

  if (props.room.type && props.room.furnishing) {
    type = (
      <p className="desc">
        {props.room.furnishing} {props.room.type}
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

  console.log(temp_img);

  return (
    <div className="singleRoom">
      {/*img*/}
      {address}
      {type}
      {desc}

      <p>{props.room.bathrooms}</p>
    </div>
  );
};

export default singleRoom;
