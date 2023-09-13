import React from "react";
import Button from "./Button";
import classes from "./ButtonGroup.module.css";

const ButtonGroup = () => {
  const goToHomePage = () => {
    window.location.replace("http://localhost:3000/");
  };

  return (
    <div className={classes.group}>
      <Button color={"white"} onClick={goToHomePage}>
        Register
      </Button>
      <Button color={"white"} onClick={goToHomePage}>
        Login
      </Button>
    </div>
  );
};

export default ButtonGroup;
