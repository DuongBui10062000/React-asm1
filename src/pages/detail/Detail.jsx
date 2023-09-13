import React from "react";

import classes from "./Detail.module.css";

import NavBar from "../home/HeaderPage/nav/NavBar";
import BodyDetail from "./BodyDetail";
import Footer from "../home/FooterPage/Footer";

const Detail = () => {
  return (
    <div>
      <NavBar title={"Detail Hotel"} />
      <BodyDetail />
      <Footer />
    </div>
  );
};

export default Detail;
