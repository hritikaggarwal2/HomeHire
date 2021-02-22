import React, { useState } from "react";

import firebase from "firebase/app";

import "../styles/common.css";
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
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailChange}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={pass}
            onChange={passChange}
            required
          />
        </label>
        <p className="link-forgot">Forgot Password?</p>
        {error ? <Alert msg={error} /> : null}
        <input type="submit" value="Get me in!" />
      </form>
    </div>
  );
}
