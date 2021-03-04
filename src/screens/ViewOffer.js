import { useState } from "react";
import firebase from "firebase/app";
import { StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { Form, Button } from "react-bootstrap";

import Offer from "../components/Offer";

const styles = StyleSheet.create({
  viewer: {
    width: "50vw",
    height: "60vh",
  },
});

export default function ViewOffer(props) {
  const [check, isCheck] = useState(false);

  function back() {}

  function decline() {}

  function accept() {
    if (!check) {
      alert("Please accept the terms and conditions first!");
    }
  }

  return (
    <div className="container offer-view">
      <h3 className="text-center">Please review and sign your Offer Letter!</h3>
      <PDFViewer className="pdf-viewer" style={styles.viewer}>
        <Offer date="March 10, 2021" name="Ryan" start="08/30/2021" />
      </PDFViewer>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          defaultValue={check}
          onChange={() => isCheck(!check)}
          type="checkbox"
          label="I have read and understand the above document"
        />
      </Form.Group>
      <div className="button-container">
        <Button variant="outline-secondary" onClick={back}>
          Back
        </Button>
        <Button variant="secondary" onClick={decline}>
          Decline
        </Button>
        <Button variant="primary" onClick={accept}>
          Accept and Continue
        </Button>
      </div>
    </div>
  );
}
