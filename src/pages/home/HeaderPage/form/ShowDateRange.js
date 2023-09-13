import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { addDays, format } from "date-fns";

import classes from "./ShowDateRange.module.css";
import Button from "../button/Button";

const ShowCaledar = (props) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const getRangeHandler = () => {
    const value = `${format(range[0].startDate, "dd-MM-yyyy")} to ${format(
      range[0].endDate,
      "dd-MM-yyyy"
    )}`;
    props.onHideCalendar(value);
  };

  return (
    <div className={classes["calendar-popup"]}>
      <DateRange
        onChange={(item) => setRange([item.selection])}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        minDate={new Date()}
        months={2}
        direction="horizontal"
        ranges={range}
      />
      <Button className={classes.btn} onClick={getRangeHandler}>
        Close
      </Button>
    </div>
  );
};

export default ShowCaledar;
