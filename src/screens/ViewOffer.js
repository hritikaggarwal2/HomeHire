import { useState } from "react";
import { StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { Form, Button } from "react-bootstrap";

import Offer from "../components/Offer";

// firebase stuff
import firebase from "firebase/app";
import "firebase/firestore";

const styles = StyleSheet.create({
  viewer: {
    width: "50vw",
    height: "60vh",
  },
});

export default function ViewOffer(props) {
  const [check, isCheck] = useState(false);
  const db = firebase.firestore();

  function decline() {
    firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch((error) => {
        console.log("Can't log out");
      });
  }

  function accept() {
    if (!check) {
      alert("Please accept the terms and conditions first!");
      return;
    }

    db.collection("employees")
      .doc(props.uid)
      .update({
        isVerified: true,
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  return (
    <div className="container offer-view">
      <h3 className="text-center semi-bold header-color">
        Please review and sign your Offer Letter!
      </h3>
      <PDFViewer className="pdf-viewer" style={styles.viewer}>
        <Offer date="March 10, 2021" name="Ryan" start="08/30/2021" />
      </PDFViewer>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          defaultValue={check}
          onChange={() => isCheck(!check)}
          type="checkbox"
          className=" semi-bold header-color"
          label="I have read and understand the above document"
        />
      </Form.Group>
      <div className="button-container allButtons">
        {/* <Button variant="outline-secondary" onClick={back}>
          Back
        </Button> */}
        <Button className="button bck" onClick={decline}>
          Decline
        </Button>
        <Button className="button nxt" onClick={accept}>
          Accept and Continue
        </Button>
      </div>
    </div>
  );
}
