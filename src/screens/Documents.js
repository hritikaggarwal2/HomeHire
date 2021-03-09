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
import Form from "react-bootstrap/Form";
// css
import "../styles/common.scss";
import img from "../data/user.svg";

export default class Dashboard extends React.Component {
  state = {
    numOnboarding: 1,
  };

  componentDidMount() {
    let addEmployee = false;
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
    let numHired = 2;
    let numTotal = numOnboarding + numHired;

    return (
      <div class="pageWithNav dashboard">
        <Container>
          <Row className="top20">
            <Col>
              <EmployeeProfileCard />
            </Col>
          </Row>

          <Row>
            <Col>
              <DocumentListCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function EmployeeProfileCard(props) {
  return (
    <Card className="full-height border-0">
      <Card.Body>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img
                src={img}
                alt="user profile"
                className="rounded-circle"
                width="160px"
                height="160px"
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-8">
                  <h1 className="font-weight-bold">Ryan Gosling</h1>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 18C21.1 18 21.99 17.1 21.99 16L22 5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V16C2 17.1 2.9 18 4 18H0C0 19.1 0.9 20 2 20H22C23.1 20 24 19.1 24 18H20ZM4 5H20V16H4V5ZM12 19C11.45 19 11 18.55 11 18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18C13 18.55 12.55 19 12 19Z"
                      fill="black"
                    />
                  </svg>
                </div>

                <div className="col-11">
                  <span className="font-weight-bold h5">
                    Principle Engineer
                  </span>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </div>

                <div className="col-11">
                  <span className="h5">ryan.gosling@lalaland.com</span>
                </div>
              </div>
            </div>

            <div className="col-2">
              <svg
                width="94"
                height="94"
                viewBox="0 0 94 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M78.3335 7.83325L15.6668 7.83325C11.3585 7.83325 7.87266 11.3583 7.87266 15.6666L7.8335 86.1666L23.5002 70.4999L78.3335 70.4999C82.6418 70.4999 86.1668 66.9749 86.1668 62.6666L86.1668 15.6666C86.1668 11.3583 82.6418 7.83325 78.3335 7.83325ZM70.5002 54.8333L23.5002 54.8333V46.9999L70.5002 46.9999V54.8333ZM70.5002 43.0833L23.5002 43.0833V35.2499L70.5002 35.2499V43.0833ZM70.5002 31.3333L23.5002 31.3333L23.5002 23.4999L70.5002 23.4999V31.3333Z"
                  fill="#6BDC44"
                />
              </svg>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

function DocumentListCard(props) {
  return (
    <Card className="full-height border-0">
      <Card.Body>
        <Table hover class="mb-5">
          <thead>
            <tr>
              <th className="h3 font-weight-bold">Documents</th>
              <th className="h5 font-weight-bold">Status</th>
              <th className="h5 font-weight-bold">Date Signed</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="row mt-3">
                  <div className="col-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="#121212"
                      />
                    </svg>
                  </div>

                  <div className="col-11">
                    <span className="h5">Offer Letter</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row mt-3">
                  <span className="font-weight-bold h5 text-success">
                    Complete
                  </span>
                </div>
              </td>
              <td>
                <div className="row mt-3">
                  <span className="h5">Feb 22, 2021</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="row">
                  <div className="col-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="#121212"
                      />
                    </svg>
                  </div>

                  <div className="col-11">
                    <span className="h5">Background Check</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="font-weight-bold h5 text-success">
                    Complete
                  </span>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="h5">Feb 23, 2021</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="row">
                  <div className="col-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="#121212"
                      />
                    </svg>
                  </div>

                  <div className="col-11">
                    <span className="h5">Onboarding Instructions</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="font-weight-bold h5 text-success">
                    Complete
                  </span>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="h5">Feb 25, 2021</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="row">
                  <div className="col-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="#121212"
                      />
                    </svg>
                  </div>

                  <div className="col-11">
                    <span className="h5">Explanation of Benefits</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="font-weight-bold h5 text-success">
                    Complete
                  </span>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="h5">Feb 25, 2021</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="row">
                  <div className="col-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="#121212"
                      />
                    </svg>
                  </div>

                  <div className="col-11">
                    <span className="h5">I-9</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="font-weight-bold h5 text-danger">
                    Incomplete
                  </span>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="h5">-</span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="row">
                  <div className="col-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 2 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="#121212"
                      />
                    </svg>
                  </div>

                  <div className="col-11">
                    <span className="h5">W-2</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="font-weight-bold h5 text-danger">
                    Incomplete
                  </span>
                </div>
              </td>
              <td>
                <div className="row">
                  <span className="h5">-</span>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>

        <div>
          <div className="row">
            <div className="col-9"></div>

            <div className="col-2">
              <span className="h5">See All</span>
            </div>

            <div className="col-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                  stroke="#121212"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z"
                  stroke="#121212"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z"
                  stroke="#121212"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
