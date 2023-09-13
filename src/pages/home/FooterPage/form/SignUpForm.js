import React from "react";

import classes from "./SignUpForm.module.css";

import Button from "../../HeaderPage/button/Button";

const SignUpForm = () => {
  const submitHander = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes["form-sign-up"]} action="" onSubmit={submitHander}>
      <input
        className={classes["email-input"]}
        type="text"
        placeholder="Your email"
      />
      <Button>Subscribe</Button>
    </form>
  );
};

export default SignUpForm;
