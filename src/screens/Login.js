import { useState, useEffect } from "react";

import firebase from "firebase/app";

import Alert from "../components/Alert";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const db = firebase.firestore();

  useEffect(() => {
    db.collection("employees")
      .doc("wm7Q1szTsUcBicfm0kYUAPL44Eh2")
      .update({
        isVerified: false,
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

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
      <h4 className="primaryText">Login to your account</h4>
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

        {error ? <Alert msg={error} /> : null}
        <Button className="nxt" type="submit">
          Secure Login
        </Button>
      </Form>
    </div>
  );
}
