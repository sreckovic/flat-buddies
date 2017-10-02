import React from 'react';

const Flat = (props) => {
  console.log(props.flat);
  return (
    <div className="flat">
      <h2>{props.flat.suburb}, {props.flat.city}</h2>
      <h3>Private room with shared bathroom</h3>

      <ul>
      </ul>
    </div>
  )
}

export default Flat;