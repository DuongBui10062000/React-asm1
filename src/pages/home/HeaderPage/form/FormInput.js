import React, { useState } from "react";
import classes from "./FormInput.module.css";
import Button from "../button/Button";

import ShowDateRange from "./ShowDateRange";

const FormInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");

  const goToSearchHandler = () => {
    window.location.replace("http://localhost:3000/search");
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const showCalendarHandler = () => {
    setIsOpen((prevStatus) => !prevStatus);
  };

  const setHideCalendar = (value) => {
    console.log(value);
    setIsOpen((prevCalendar) => !prevCalendar);
    setDate(value);
  };

  return (
    <div>
      <form
        className={`${classes["form-input"]} ${props.className}`}
        action=""
        onSubmit={formSubmitHandler}
      >
        <div>
          <label htmlFor="place">
            <i className="fa fa-bed"></i>
          </label>
          <input id="place" type="text" placeholder="Where are you going?" />
        </div>

        <div>
          <label htmlFor="arrive-leave">
            <i className="fa fa-calendar"></i>
          </label>
          <input
            id="arrive-leave"
            type="text"
            placeholder="2021-01-01 to 2023-12-31"
            onClick={showCalendarHandler}
            value={date}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="info">
            <i className="fa fa-child"></i>
          </label>
          <input
            id="info"
            type="text"
            placeholder="1 adult · 0 children · 1 room"
          />
        </div>

        <Button onClick={goToSearchHandler}>Search</Button>
      </form>
      {isOpen ? <ShowDateRange onHideCalendar={setHideCalendar} /> : ""}
    </div>
  );
};

export default FormInput;
