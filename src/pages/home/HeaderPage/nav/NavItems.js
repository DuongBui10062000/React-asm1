import React, { useState } from "react";
import classes from "./NavItems.module.css";

const NavItem = (props) => {
  const [active, setActive] = useState("Stays");

  const activeHandler = (event) => {
    const value = event.target.closest(".check").dataset.values;
    setActive(value);
    props.onChangeActive(value);
  };

  return (
    <ul className={classes.col}>
      {props.data.map((item) => (
        <li
          className={`check ${classes.check} ${
            item.active ? classes["border-item"] : ""
          }`}
          key={item.type}
          data-values={item.type}
          onClick={activeHandler}
        >
          <i className={`fa ${item.icon}`}></i>
          <div className={classes.range}>{item.type}</div>
        </li>
      ))}
    </ul>
  );
};

export default NavItem;
