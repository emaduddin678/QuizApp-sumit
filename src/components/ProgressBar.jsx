import React from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
// import { Link } from "react-router-dom";

function ProgressBar({ next, prev,submit, progress }) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{progress}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      {/* <Link to="/result"> */}
      {/* <button>
        </button> */}
      {/* {console.log(next)} */}
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit Quiz" : "Next Quiz"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
      {/* </Link> */}
    </div>
  );
}

export default ProgressBar;
