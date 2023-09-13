import React from "react";

import Button from "../../home/HeaderPage/button/Button";
import classes from "./ContentItem.module.css";
import Card from "../../home/BodyPage/UI/Card";

const ContentItem = (props) => {
  const goToDetailHandler = () => {
    window.location.replace("http://localhost:3000/detail");
  };

  return (
    <Card
      className={`${classes.background} ${classes.row}`}
      onClick={goToDetailHandler}
    >
      <div>
        <img
          className={classes["image-area"]}
          src={props.data.image_url}
          alt={props.data.name}
        />
      </div>

      <div className={classes["info-area"]}>
        <h2>{props.data.name}</h2>
        <p>{`${props.data.distance} from center`}</p>
        <div className={classes.tag}>{props.data.tag}</div>
        <br />
        <span>{props.data.description}</span>
        <p>{props.data.type}</p>
        {props.data.free_cancel ? (
          <div className={classes.cancel}>
            <span>Free cancellation</span>
            <p>You can cancel later, so lock in this great price today!</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={classes["action-area"]}>
        <h4>{props.data.rate_text}</h4>
        <div className={classes.rate}>{props.data.rate}</div>
        <div className={classes["action-group"]}>
          <h3>{`$${props.data.price}`}</h3>
          <p>Include taxes and fees</p>
          <Button className={classes.btn}>See availability</Button>
        </div>
      </div>
    </Card>
  );
};

export default ContentItem;
