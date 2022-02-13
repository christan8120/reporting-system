import React from "react";
import './Field.scss';

const Field = (props) => {
  return (
    <div className={`field ${props.className}`} style={props.style}>
      <p>{props.label}</p>
      {props.children}
    </div>
  )
}

export default Field;