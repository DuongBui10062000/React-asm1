import React from "react";
import NavBar from "../home/HeaderPage/nav/NavBar";

import classes from "./Search.module.css";
import BodySearch from "./body/BodySearch";
import Footer from "../home/FooterPage/Footer";

const Search = () => {
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.container}>
          <NavBar title={"Search Hotels"} />
        </div>
      </div>
      <div className={classes.container}>
        <BodySearch className={classes.form} />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
