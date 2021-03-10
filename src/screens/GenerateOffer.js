import firebase from "firebase/app";
import { StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import Offer from "../components/Offer";

const styles = StyleSheet.create({
  viewer: {
    width: "50vw",
    height: "60vh",
  },
});

export default function GenerateOffer(props) {
  return (
    <div className="container offer-view">
      <h3 className="text-center semi-bold header-color">
        Review the Offer Letter
      </h3>
      <PDFViewer className="pdf-viewer" style={styles.viewer}>
        <Offer date="March 10, 2021" name="Ryan" start="08/30/2021" />
      </PDFViewer>
    </div>
  );
}
