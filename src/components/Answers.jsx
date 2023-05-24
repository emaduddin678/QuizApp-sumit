import React from "react";
import Checkbox from "./Checkbox";
import classes from "../styles/Answers.module.css";

function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test Answer" id="option1" />
    </div>
  );
}

export default Answers;
