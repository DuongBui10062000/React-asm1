import React from "react";
import CityItems from "./CityItems";
import classes from "./CityList.module.css";

const city_data = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const CityList = () => {
  return (
    <div className={classes.container}>
      {city_data.map((item) => (
        <CityItems className={classes.item} key={item.name} data={item} />
      ))}
    </div>
  );
};

export default CityList;
