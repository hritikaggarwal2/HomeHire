import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  TextField,
  makeStyles,
} from "@material-ui/core";

import firebase from "firebase/app";

import "../styles/common.scss";
import Alert from "../components/Alert";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "#5D576B !important",
    "& .Mui-focused": {
      color: "#5D576B",
    },
    "& .MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline": {
      border: "2px solid #5D576B",
    },
    "& .MuiInputBase-root fieldset.MuiOutlinedInput-notchedOutline": {
      "border-width": "2px",
    },
    "& .MuiInputBase-root input": {
      color: "#5D576B",
    },
    "& .MuiInputBase-root:hover fieldset.MuiOutlinedInput-notchedOutline": {
      "border-color": "rgba(0, 0, 0, 0.5);",
    },
  },
}));

export default function Login() {
  const styleSheet = useStyles();
  const history = useHistory();

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

  function changePage() {
    history.push({
      pathname: "/signup",
    });
  }

  return (
    <div className="Login">
      <h1 className="primaryText">Log In</h1>
      <form className="formContainer" onSubmit={createAccount}>
        <FormControl>
          <TextField
            classes={{
              root: styleSheet.inputRoot,
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
            classes={{
              root: styleSheet.inputRoot,
            }}
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

        {error ? <Alert msg={error} /> : null}
        <input type="submit" value="Get me in!" />
        <input
          onClick={changePage}
          className="empty-btn"
          type="submit"
          value="Create Account Instead"
        />
      </form>
    </div>
  );
}
