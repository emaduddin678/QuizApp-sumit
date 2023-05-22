import React from 'react'
import image from '../assets/images/login.svg'
import classes from '../styles/Illustration.module.css'

function Illustration_login() {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Login" />
    </div>
  );
}

export default Illustration_login