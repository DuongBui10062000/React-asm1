import React from "react";

import classes from "./FooterList.module.css";

const list_data = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

const FooterList = () => {
  return (
    <div className={classes["container-footer"]}>
      <div className={classes["footer-list"]}>
        {list_data.map((item) => {
          return (
            <div key={item.col_number}>
              {item.col_values.map((value) => (
                <p className={classes.value} key={value}>
                  {value}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterList;
