import React, { useState } from "react";

import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class Dashboard extends React.Component {
  state = {
    numOnboarding: 1,
  };

  componentDidMount() {
    let addEmployee = false;
    console.log(this.props?.user);
    if (this.props?.location?.state) {
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
    let numHired = 3;
    let numTotal = numOnboarding + numHired;
    return (
      // toggle the props passed to DashboardContent to control which type of dashboard is generated
      <DashboardContent
        user={this.props.user}
        employerView={
          this.props.employerView !== undefined ? this.props.employerView : true
        }
        numTotal={numTotal}
        numOnboarding={numOnboarding}
      />
    );
  }
}

// give this function employerView=true to generate employer dashboard,
// false to generate employee dashboard
// this condition can later be changed to user id instead or whatever else is needed
function DashboardContent(props) {
  const [defaultDate] = useState(new Date(2021, 2, 22));
  if (props.employerView) {
    return (
      <div className="pageWithNav dashboard">
        <Container>
          <h1 class="top32 dashboard-title" >Dashboard</h1>
          {/* top card of the dashboard */}
          <Card className="  top10">
            <Row>
              <Col xs={3}>
                <h3>Teams</h3>
                <p className="big-number">1</p>
              </Col>
              <Col xs={3}>
                <h3>Total employees</h3>
                <p className="big-number">{props.numTotal}</p>
              </Col>
              <Col xs={3}>
                <h3>Onboarding</h3>
                <p className="big-number">{props.numOnboarding}</p>
              </Col>
              <Col xs={3}>
                <h3>Needs Attention</h3>
                <p className="big-number">0</p>
              </Col>
            </Row>
          </Card>
          {/* This row contains payroll, onboading, notification cards */}
          <Row className="top32">
            <Col xs={12} sm={7}>
              <PayrollCard numTotal={props.numTotal} />
            </Col>
            <Col>
              <OnboardingCard />
              <NotificationsCard className="top32"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="pageWithNav dashboard">
        <Container>
          {/* top card of the dashboard */}
          <Card className="top32">
            <Card.Body>
              <Card.Title className="no-margin dashboard-title">
                Hi {props.user?.full_name?.split(" ")[0]}! Welcome to Minerva.
              </Card.Title>
            </Card.Body>
          </Card>
          {/* This row contains payroll, onboading, notification cards */}
          <Row className="top32">
            <Col xs={12} sm={6}>
              <Card className="  full-height">
                <Card.Body>
                  <Card.Title>Things to do (2)</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item action className="button-list-item">
                      Review and sign offer letter by the 22nd
                      <Button href="/documents" variant="outline-dark" size="sm">View</Button>
                    </ListGroup.Item>
                    <ListGroup.Item action className="button-list-item">
                      Fill out remaining profile information
                      <Button href="/profile" variant="outline-dark" size="sm">View</Button>
                    </ListGroup.Item>
                    <ListGroup.Item disabled className="button-list-item">
                      View onboarding documents (sign offer first)
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col align="center">
              <Calendar defaultValue={defaultDate} />
            </Col>
          </Row>
          <Row className="top32">
            <Col xs={12} sm={6}>
              <Card className="  full-height">
                <Card.Body>
                  <Card.Title>What's new</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      3 new documents are available to view
                    </ListGroup.Item>
                    <ListGroup.Item>Welcome to Minerva!</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <NotificationsCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function PayrollCard(props) {
  return (
    <Card className="full-height">
      <Card.Body>
        <Card.Title>Payroll for March 2021</Card.Title>
        <Table hover size="sm">
          <thead>
            <tr>
              <th>Employees ({props.numTotal}) </th>
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
              <td>Leonardo DiCaprio</td>
              <td>10,000</td>
              <td>2,000</td>
              <td>12,000</td>
              <td>Sent</td>
            </tr>
            <tr>
              <td>Tom Hanks</td>
              <td>10,000</td>
              <td>2,000</td>
              <td>12,000</td>
              <td>Sent</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

function OnboardingCard(props) {
  return (
    <Card className=" ">
      <Card.Body>
        <Row>
          <Card.Title>Onboarding Status</Card.Title>
          <Table hover size="sm">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Status</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ryan Gosling</td>
                <td>Reviewing offer</td>
                <td>
                  <Button variant="outline-dark" size="sm">
                    View
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Ryan Gosling</td>
                <td>Created profile</td>
                <td>
                  <Button variant="outline-dark" size="sm">
                    View
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Tom Hanks</td>
                <td>Signed offer</td>
                <td>
                  <Button variant="outline-dark" size="sm">
                    View
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Card.Body>
    </Card>
  );
}

function NotificationsCard(props) {
  return (
    <Card className={props.className}>
      <Card.Body>
        <Card.Title>Notifications</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item action>
            Minerva is expanding to Ontario in ...
          </ListGroup.Item>
          <ListGroup.Item action>
            See some of our latest featured hires ...
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
