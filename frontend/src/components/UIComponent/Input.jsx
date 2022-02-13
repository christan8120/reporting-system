import React from "react";

const Input = (props) => {
  return (
    <input type={props.type} className={props.className} name={props.name} id={props.id} style={props.style}></input>
  )
}

export default Input;