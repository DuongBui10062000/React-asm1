import React, { useState } from "react";
import NavItem from "./NavItems";
import classes from "./NavBar.module.css";
import ButtonGroup from "../button/ButtonGroup";

const nav_data = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

const NavBar = (props) => {
  const [navList, setNavList] = useState(nav_data);

  const changeActive = (data) => {
    nav_data.forEach((item) => {
      if (item.type !== data) {
        item.active = false;
      }

      if (item.type === data) {
        item.active = true;
      }
    });

    setNavList(nav_data);
  };

  return (
    <div className={classes.background}>
      <div className={classes.navbar}>
        <div className={classes["nav-group"]}>
          <h1>{props.title}</h1>
          <NavItem data={navList} onChangeActive={changeActive} />
        </div>
        <div className={classes["button-group"]}>
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
