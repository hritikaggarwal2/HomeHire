import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import reservedOfferLetter from "../data/reservedOfferLetter.png";
import contract from "../data/employmentContract.png";

export default function NewHireConfirmation() {
  return (
    <div className="container review">
      <h3>NewHire Process Started</h3>
      <p>
        Please review the initial offer and confirm. We will review your draft
        shortly and get back to you within 24 hours.
      </p>
      <br />
      <Container>
        <Row>
          <Col sm={12}>
            <div className="docreview">
              <h4>Offer Documents (2)</h4>
              <Row className="justify-content-md-center">
                <Col sm={5}>
                  <Card className="doccard">
                    <Image src={reservedOfferLetter} thumbnail fluid />
                    <h4>Document 1: New Hire Offer</h4>
                    <h5>Created: 02/21/2021</h5>
                    <Row>
                      <Col sm={4}>
                        <Link target="_blank" to="./offer">
                          View
                        </Link>
                      </Col>
                      <Col sm={4}>
                        <a>Download</a>
                      </Col>
                      <Col sm={4}>
                        <a>Modify</a>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col sm={5}>
                  <Card className="doccard">
                    <Image src={contract} thumbnail fluid />
                    <h4>Document 2: Minerva Leasing Contract</h4>
                    <h5>Created: 02/21/2021</h5>
                    <Row>
                      <Col sm={4}>
                        <Link target="_blank" to="./offer">
                          View
                        </Link>
                      </Col>
                      <Col sm={4}>
                        <a>Download</a>
                      </Col>
                      <Col sm={4}>
                        <a>Modify</a>
                      </Col>
                    </Row>
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
