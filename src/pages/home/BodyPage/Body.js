import React from "react";

import CityList from "./city/CityList";
import HotelTypeList from "./hoteltype/HotelTypeList";
import HotelList from "./hotel/HotelList";

import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.body}>
      <CityList />
      <h3 className={classes.description}>Browse by property type</h3>
      <HotelTypeList />
      <h3 className={classes.description}>Home guests love</h3>
      <HotelList />
    </div>
  );
};

export default Body;
