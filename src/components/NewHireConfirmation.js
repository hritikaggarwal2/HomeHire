import React from "react";
import {Container, Row, Col, Card, Image} from "react-bootstrap";

export default function NewHireConfirmation() {
  return (
    <div className="container review">
      <h3>NewHire Process Started</h3>
      <p>
        Please review the initial offer and confirm. 
        We will review your draft shortly and get back to you within 24 hours.
      </p>
      <br/>
      <Container>
        <Row>
          <Col sm={12}>
          <div className="docreview">
            <h4>Offer Documents (2)</h4>
            <Row className="justify-content-md-center">
              <Col sm={5}>
                <Card className="doccard">
                  <Card.Img variant="top" />
                  <p>hi</p>
                </Card>
              </Col>
              <Col sm={5}>
                <Card className="doccard">
                  <Image src="../data/offerletter.jpg"/>
                  <p>hi</p>
                </Card>
              </Col>
            </Row>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
