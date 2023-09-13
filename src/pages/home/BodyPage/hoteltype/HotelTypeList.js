import React from "react";

import HotelTypeItem from "./HotelTypeItem";

import classes from "./HotelTypeList.module.css";

const type_data = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const HotelTypeList = () => {
  return (
    <div className={classes["hotel-type-list"]}>
      {type_data.map((item) => (
        <HotelTypeItem key={item.name} data={item} />
      ))}
    </div>
  );
};

export default HotelTypeList;
