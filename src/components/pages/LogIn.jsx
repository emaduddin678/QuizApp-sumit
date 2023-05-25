import React from "react";
import Illustration_login from "../Illustration_login";
import LoginForm from "../LoginForm";


function LogIn() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration_login />
        <LoginForm />
      </div>
    </>
  );
}

export default LogIn;
