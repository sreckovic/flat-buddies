import React from "react";

import { Link } from "react-router-dom";

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

  console.log(temp_img);

  return (
    <div className="singleRoom">
      {/*img*/}
      {address}
      {type}
      {desc}
      <ul>
        <li>
          <i className="fa fa-bed" aria-hidden="true" />
          {props.room.bedrooms}
        </li>
        <li>
          <i className="fa fa-bath" aria-hidden="true" />
          {props.room.bathrooms}
        </li>
        <li>
          <i className="fa fa-users" aria-hidden="true" />
          {props.room.persons}
        </li>
      </ul>
    </div>
  );
};

export default singleRoom;
