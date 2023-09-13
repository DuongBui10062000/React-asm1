import React from "react";
import Button from "../../home/HeaderPage/button/Button";
import classes from "./HeaderSection.module.css";

const HeaderDetail = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["header-detail"]}>
        <h2>{props.data.name}</h2>
        <p className={classes.address}>
          <i className="fa fa-map-marker"></i>
          {props.data.address}
        </p>
        <p className={classes.distance}>
          <span>{props.data.distance}</span>
        </p>
        <p className={classes.price}>
          <span>{props.data.price}</span>
        </p>
        <Button className={classes.btn}>Reserve or Book Now!</Button>
      </div>
    </div>
  );
};

export default HeaderDetail;
