import React from "react";

import classes from "./BodySearch.module.css";

import SearchForm from "../form/SearchForm";
import ContentList from "../content/ContentList";

const BodySearch = (props) => {
  return (
    <div className={`${props.className} ${classes.container}`}>
      <SearchForm />
      <ContentList />
    </div>
  );
};

export default BodySearch;
