import React, { useState } from "react";
import { FormControl, FormHelperText, TextField } from "@material-ui/core";

import firebase from "firebase/app";

import "../styles/common.scss";
import Alert from "../components/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  function createAccount(e) {
    e.preventDefault();
    setError("");

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        // Send user data to another page
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function passChange(e) {
    setPass(e.target.value);
  }

  return (
    <div className="Login">
      <h2>Log In</h2>
      <form className="formContainer" onSubmit={createAccount}>
        <FormControl>
          <TextField
            classes={{
              notchedOutline: "outlineFocus",
              focused: "outlineFocus",
            }}
            type="email"
            name="email"
            aria-describedby="email-helper-text"
            id="email-input"
            label="Email"
            variant="outlined"
            value={email}
            onChange={emailChange}
            required
          />
          <FormHelperText id="email-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            type="password"
            name="password"
            aria-describedby="pass-helper-text"
            id="pass-input"
            label="Password"
            variant="outlined"
            value={pass}
            onChange={passChange}
            required
          />
          <FormHelperText id="pass-helper-text">
            Must be more than 8 characters
          </FormHelperText>
        </FormControl>

        <p className="link-forgot">Forgot Password?</p>
        {error ? <Alert msg={error} /> : null}
        <input type="submit" value="Get me in!" />
      </form>
    </div>
  );
}
