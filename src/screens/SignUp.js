import { useState } from "react";

import firebase from "firebase/app";

import Alert from "../components/Alert";
import { Form, Button } from "react-bootstrap";

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
      <h4 className="primaryText">Signup for a new account</h4>
      <Form className="formContainer" onSubmit={createAccount}>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email address"
          value={email}
          onChange={emailChange}
          required
        />
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter Password"
          value={pass}
          onChange={passChange}
          required
        />
        <Form.Control
          type="password"
          name="password"
          placeholder="Re-enter Password"
          value={confirm}
          onChange={confirmChange}
          required
        />

        {error ? <Alert msg={error} /> : null}
        <Button variant="primary" type="submit">
          Secure Signup
        </Button>
      </Form>
    </div>
  );
}
