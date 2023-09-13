import React from "react";
import classes from "./FooterSection.module.css";

import Button from "../../home/HeaderPage/button/Button";

const FooterSection = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["footer-section"]}>
        <div className={classes.info}>
          <h2>{props.data.title}</h2>
          <p>{props.data.description}</p>
        </div>
        <div className={classes.action}>
          <h3>Perfect for a 9-night stay!</h3>
          <p>
            located in the real heart of Krakow this property has an excellent
            location score of 9.8!
          </p>
          <p className={classes.price}>
            <span>{`$${props.data.nine_night_price}`}</span> (9 nights)
          </p>
          <Button>Reserve or Book Now!</Button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
