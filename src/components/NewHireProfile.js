import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

export default function NewHireProfile() {

  return (
    <div className="newHireProfileContainer">
      <Container>
        <h3>New Hire Profile</h3>
        <p>
          Enter basic information for your new employee to create an official
          contract document and register them in the system. You can skip some
          information if you do not know at this point. Your employee can fill it
          in later.
        </p>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="4">
              <strong>Employee ID</strong>
            </Form.Label>
            <Col sm="8">
              <Form.Control plaintext readOnly defaultValue="AR20210221-1" />
            </Col>
          </Form.Group>
        </Form>
        <br />

        <Row>
          <Col>
            <Form.Group>
              <Form.Label><strong>First Name *</strong></Form.Label>
              <Form.Control type="name" placeholder="Employee's legal first name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label><strong>Last Name *</strong></Form.Label>
              <Form.Control type="name" placeholder="Employee's legal last name" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label><strong>Email Address *</strong></Form.Label>
              <Form.Control type="name" placeholder="Employee's email address" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label><strong>Social Insurance Number (SIN) *</strong></Form.Label>
              <Form.Control type="name" placeholder="*** *** ***" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label><strong>Job Title *</strong></Form.Label>
              <Form.Control placeholder="Job title" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label><strong>Salary on Offer *</strong></Form.Label>
              <Form.Control placeholder="Amount in USD" />
            </Form.Group>
          </Col>

          <div class="whiteText">
            <Col>
            <Form.Label>bye</Form.Label>
            <Form.Control type="text" placeholder="[auto-calculated] CAD" readOnly />
            </Col>
          </div>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label><strong>Sign-on Bonus </strong></Form.Label>
              <Form.Control placeholder="Amount in USD" />
            </Form.Group>
          </Col>

        <div class="whiteText">
          <Col>
          <Form.Label>should not see this</Form.Label>
          <Form.Control type="text" placeholder="[auto-calculated] CAD" readOnly />
          </Col>
        </div>
          
        </Row>

      
        <Row>
          <Col>
            <Form.Group>
              <Form.Label><strong>Start Date *</strong></Form.Label>
              <Form.Control placeholder="mm/dd/yyyy" />
            </Form.Group>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
