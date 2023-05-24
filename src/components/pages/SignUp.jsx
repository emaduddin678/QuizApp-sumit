import React from "react";
import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../styles/Signup.module.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />

        <Form className={`${classes.signup}`}>
          <TextInput
            type="text"
            name="name"
            placeholder="Enter name"
            icon="person"
          />
          <TextInput
            type="email"
            name="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            name="password"
            placeholder="Enter password"
            icon="lock"
          />
          <TextInput
            type="password"
            name="comfirm_password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>
            <span>Submit Now</span>
          </Button>
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
