import React from "react";
import classes from "./BodySection.module.css";

const BodySection = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["img-list"]}>
        {props.data.photos.map((item) => (
          <div key={item}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodySection;
