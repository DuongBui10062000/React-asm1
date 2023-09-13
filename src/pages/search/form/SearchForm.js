import React from "react";

import classes from "./SearchForm.module.css";

import Button from "../../home/HeaderPage/button/Button";

const SearchForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.background}>
      <form
        className={`${classes["search-form"]} ${classes.col}`}
        action=""
        onSubmit={submitHandler}
      >
        <h2 className={classes.title}>Search</h2>
        <div>
          <label htmlFor="destination">Destination</label>
          <input
            className={classes["big-input"]}
            type="text"
            id="destination"
          />

          <label htmlFor="check-in-date">Check-in Date</label>
          <input
            className={classes["big-input"]}
            type="text"
            id="check-in-date"
          />
        </div>
        <div className={classes.col}>
          <p>Options</p>
          <div className={`${classes.options} ${classes.col}`}>
            <div className={classes.row}>
              <label htmlFor="min-price">
                Min price <span>per night</span>
              </label>
              <input type="number" id="min-price" />
            </div>

            <div className={classes.row}>
              <label htmlFor="max-price">
                Max price <span>per night</span>
              </label>
              <input type="number" id="max-price" />
            </div>

            <div className={classes.row}>
              <label htmlFor="adult">Adult</label>
              <input type="number" id="adult" />
            </div>

            <div className={classes.row}>
              <label htmlFor="children">Children</label>
              <input type="number" id="children" />
            </div>

            <div className={classes.row}>
              <label htmlFor="room">Room</label>
              <input type="number" id="room" />
            </div>
          </div>
        </div>
        <Button>Search</Button>
      </form>
    </div>
  );
};

export default SearchForm;
