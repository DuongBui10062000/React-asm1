import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${
        props.color === "white" ? classes["btn-white"] : classes["btn-blue"]
      } ${props.className}`}
      onClick={props.onClick}
    >
      <div>{props.children}</div>
    </button>
  );
};

export default Button;
