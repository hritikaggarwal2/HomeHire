import React from "react";

import {
  Card,
  Col,
  Container,
  Row,
  Table
} from 'react-bootstrap';

export default class Dashboard extends React.Component {
  state = {
    numOnboarding: 1,
  };

  componentDidMount() {
    let addEmployee = false;
    if (this.props.location.state) {
      addEmployee = this.props.location.state.addEmployee;
    }
    if (addEmployee) {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { numOnboarding: state.numOnboarding + 1 };
      });
    }
  }

  render() {
    let numOnboarding = this.state.numOnboarding;
    let numHired = 2;
    let numTotal = numOnboarding + numHired;
    return (
      <div class="pageWithNav dashboard">
        <Container>
          <h1>Dashboard</h1>
          {/* top card of the dashboard */}
          <Card className="shaded-background top10">
            <Row>
              <Col xs={3}>
                <h3>Teams</h3>
                <p class="big-number">1</p>
              </Col>
              <Col xs={3}>
                <h3>Total employees</h3>
                <p class="big-number">{numTotal}</p>
              </Col>
              <Col xs={3}>
                <h3>Onboarding</h3>
                <p class="big-number">{numOnboarding}</p>
              </Col>
              <Col xs={3}>
                <h3>Needs Attention</h3>
                <p class="big-number">0</p>
              </Col>
            </Row>
          </Card>
          <Row className="top20">
            <Col xs={12} sm={7}>
              {/* Payroll quick view card*/}
              <Card>
                <Card.Body>
                  <Card.Title>
                    Payroll for March 2021
                  </Card.Title>
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>Employees ({numTotal}) </th>
                        <th>Salary</th>
                        <th>Misc. Comp</th>
                        <th>Gross</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alice Oh</td>
                        <td>10,000</td>
                        <td>2,000</td>
                        <td>12,000</td>
                        <td>Sent</td>
                      </tr>
                      <tr>
                        <td>Alice Oh</td>
                        <td>10,000</td>
                        <td>2,000</td>
                        <td>12,000</td>
                        <td>Sent</td>
                      </tr>
                      <tr>
                        <td>Alice Oh</td>
                        <td>10,000</td>
                        <td>2,000</td>
                        <td>12,000</td>
                        <td>Sent</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {/* onboarding status card */}
              <Card className="shaded-background">
                <Card.Body>
                  <Row>
                    <Card.Title>Onboarding Status</Card.Title>
                  </Row>
                </Card.Body>
              </Card>
              {/* notifications card */}
              <Card className="shaded-background top10">
                <Card.Body>
                  <Row>
                    <Card.Title>Notifications</Card.Title>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
