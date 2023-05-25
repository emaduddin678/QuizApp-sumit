import React, { useState } from "react";
import Form from "./Form";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(true);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  // console.log(useAuth());
 const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setError("Password don't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="name"
        placeholder="Enter name"
        icon="person"
        onChange={(e) => setUsername(e.target.value)}
        required
        value={username}
      />
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
        name="password"
        placeholder="Enter password"
        icon="lock"
        autoComplete="on"
        onChange={(e) => setPassword(e.target.value)}
        required
        value={password}
      />
      <TextInput
        type="password"
        name="comfirm_password"
        placeholder="Confirm password"
        icon="lock_clock"
        autoComplete="on"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        value={confirmPassword}
      />

      <Checkbox
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
      />
      <Button disabled={loading} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
      {/* {console.log(useAuth().currentUser.displayName)} */}
    </Form>
  );
}

export default SignUpForm;
