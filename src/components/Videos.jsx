import React from "react";
import classes from "../styles/Videos.module.css";
import Video from "./video";

function Videos() {
  return (
    <div className={classes.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

export default Videos;
