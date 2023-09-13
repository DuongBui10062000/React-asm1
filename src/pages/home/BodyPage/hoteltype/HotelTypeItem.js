import React from "react";

import Card from "../UI/Card";

import classes from "./HotelTypeItem.module.css";

const HotelTypeItem = (props) => {
  return (
    <Card>
      <img
        className={classes["hoteltype-img"]}
        src={props.data.image}
        alt={props.data.name}
      />
      <h2 className={classes.name}>{props.data.name}</h2>
      <p className={classes.count}>{`${props.data.count} hotels`}</p>
    </Card>
  );
};

export default HotelTypeItem;
