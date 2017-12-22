import React from "react";

import { Link } from "react-router-dom";

import Preview from "../Preview/Preview";
import "./SingleRoom.css";
import temp_img from "../../assets/images/test_local.png";

const singleRoom = props => {
  let img, address, type, desc;

  if (temp_img) {
    img = (
      <Link to={"/room/" + props.room.id}>
        <img src={temp_img} alt="" />
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

  return (
    <div className="singleRoom">
      {/*img*/}
      {address}
      {type}
      {desc}

      <Preview
        bedrooms={props.room.bedrooms}
        bathrooms={props.room.bathrooms}
        persons={props.room.persons}
      />

      {props.room.rent ? <p>$ {props.room.rent}</p> : null}

      <p>
        <Link to={"/room/" + props.room.id}>Message</Link>
      </p>
    </div>
  );
};

export default singleRoom;
