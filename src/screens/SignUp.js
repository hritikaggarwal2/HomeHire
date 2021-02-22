import React, { useState } from "react";

import firebase from "firebase/app";

import "../styles/common.css";
import Alert from "../components/Alert";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  function createAccount(e) {
    e.preventDefault();
    setError("");

    if (pass !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (pass.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    console.log(email);
    console.log(pass);
    console.log(confirm);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
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

  function confirmChange(e) {
    setConfirm(e.target.value);
  }

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <form className="formContainer" onSubmit={createAccount}>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailChange}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={pass}
            onChange={passChange}
          />
        </label>
        <label>
          <span>Confirm Password</span>
          <input
            type="password"
            name="password"
            value={confirm}
            onChange={confirmChange}
          />
        </label>
        {error ? <Alert msg={error} /> : null}
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
}
