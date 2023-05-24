import React from "react";
import Illustration_login from "../Illustration_login";
import Button from "../Button";
import Form from "../Form";
import classes from "../../styles/Login.module.css";
import TextInput from "../TextInput";

function LogIn() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration_login />
        <Form className={`${classes.login}`}>
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default LogIn;
