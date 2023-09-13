import React from "react";

import classes from "./Footer.module.css";

import SignUpForm from "./form/SignUpForm";
import FooterList from "./footerlist/FooterList";

const Footer = () => {
  return (
    <div className={classes.background}>
      <div className={classes.footer}>
        <h2 className={classes.title}>Save time, save money!</h2>
        <p className={classes["sub-title"]}>
          Sign up and we'll send the best deals to you
        </p>
        <SignUpForm />
      </div>
      <div className={classes.list}>
        <FooterList />
      </div>
    </div>
  );
};

export default Footer;
