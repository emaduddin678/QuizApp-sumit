import React, { useState } from "react";
import Button from "./Button";
import Form from "./Form";
// import classes from "./../styles/Login.module.css"; 
import TextInput from "./TextInput";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);

      const { login } = useAuth();
      // console.log(useAuth());
      const navigate = useNavigate();

      async function handleSubmit(event) {
        event.preventDefault();

        try {
          setError("");
          setLoading(true);
          await login(email, password);
          navigate("/");
        } catch (err) {
          console.log(err);
          setLoading(false);
          setError("Failed to login in your account");
        }
      }

  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <TextInput
        type="email"
        name="email"
        placeholder="Enter email"
        icon="alternate_email"
        onChange={(e) => setEmail(e.target.value)}
        required
        value={email}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        autoComplete="on"
        onChange={(e) => setPassword(e.target.value)}
        required
        value={password}
      />
      {/* {console.log(loading)} */}
      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}

export default LoginForm;
