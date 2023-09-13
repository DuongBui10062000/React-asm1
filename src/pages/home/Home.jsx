import React from "react";

import classes from "./Home.module.css";

import NavBar from "./HeaderPage/nav/NavBar";
import Header from "./HeaderPage/header/Header";
import Body from "./BodyPage/Body";
import Footer from "./FooterPage/Footer";

const Home = () => {
  return (
    <div>
      <div className={classes["container-header"]}>
        <NavBar title={"Booking Website"} />
        <Header className={classes.header} />
      </div>
      <div className={classes["container-body"]}>
        <Body />
      </div>
      <div className={classes["container-footer"]}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
