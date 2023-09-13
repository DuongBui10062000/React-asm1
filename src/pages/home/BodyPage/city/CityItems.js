import React from "react";

import Card from "../UI/Card";

import classes from "./CityItems.module.css";

const CityItems = (props) => {
  return (
    <Card className={props.className}>
      <img
        className={classes["city-img"]}
        src={props.data.image}
        alt={props.name}
      />
      <h2 className={classes.title}>{props.data.name}</h2>
      <p className={classes.description}>{props.data.subText}</p>
    </Card>
  );
};

export default CityItems;
