import React from "react";
import Button from "../button/Button";
import FormInput from "../form/FormInput";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <div className={`${classes.header} ${props.className}`}>
        <h2 className={classes.title}>A lifetime of discounts? It's Genius.</h2>
        <p className={classes.subTitle}>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <Button className={classes.btn} color="blue">
          Sign in / Register
        </Button>
        <FormInput className={classes.form}></FormInput>
      </div>
    </div>
  );
};

export default Header;
