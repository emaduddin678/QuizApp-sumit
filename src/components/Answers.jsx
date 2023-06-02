import React from "react";
import Checkbox from "./Checkbox";
import classes from "../styles/Answers.module.css";

function Answers({ options = [], handleChange }) {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => {
        return (
          <Checkbox
            key={index}
            className={classes.answer}
            text={option.title}
            id="option1"
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          />
        );
      })}
    </div>
  );
}

export default Answers;
