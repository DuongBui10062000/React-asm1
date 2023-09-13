import React from "react";

import classes from "./HotelItem.module.css";
import Card from "../UI/Card";

const HotelItem = (props) => {
  const goToDetailHandler = () => {
    window.location.replace("http://localhost:3000/detail");
  };

  return (
    <Card className={classes["card-act"]} onClick={goToDetailHandler}>
      <img
        className={classes["hotel-item-img"]}
        src={props.data.image_url}
        alt={props.data.name}
      />

      <div className={classes["hotel-name"]}>{props.data.name}</div>

      <p>{props.data.city}</p>
      <p className={classes.price}>{`Starting from ${props.data.price}$`}</p>
      <div className={classes.evaluate}>
        <div className={classes.rate}>{props.data.rate}</div>
        <div className={classes.type}>{props.data.type}</div>
      </div>
    </Card>
  );
};

export default HotelItem;
