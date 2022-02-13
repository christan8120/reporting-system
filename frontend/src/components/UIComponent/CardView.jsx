import React from "react";
import './CardView.scss';

const CardView = (props) => {
  return (
    <div className={`card-view ${props.className}`} style={props.style}>
      {props.children}
    </div>
  )
}
export default CardView;