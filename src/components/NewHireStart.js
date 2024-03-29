import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

export default function NewHireStart() {

  return (
    <div className="newHireStartContainer">
      <h3>Add New Employee</h3>
      <Container>
        <Row>
          <Col><h4>Where will your remote hire live and work from?</h4></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control as="select">
              <option default>Select a country</option>
              <option>United States</option>
              <option>Canada</option>
            </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Postal Code"
                  name="zip"
                />
              </Form.Group>
          </Col>
          <Col xs={1}></Col>
          <Col xs={5}>
            <p><h5>Minerva's note</h5>Knowing where your new hire will be conducting 90% of their work informs which provincial laws we review.</p>
          
          </Col>
          
        </Row>

        <Row>
          <Col><h4>What is your remote hire's residency status?</h4></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
            <Form.Label>Residency</Form.Label>
            <Form.Control as="select">
              <option default>Select one</option>
              <option>Citizen</option>
              <option>Visa</option>
            </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={1}></Col>
          <Col sm={5}>
          <p><h5>Minerva's note</h5>We can automate 90% of Canadian newhire cases. We can refer you to a specialist if your case is one of the 10%!</p>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
