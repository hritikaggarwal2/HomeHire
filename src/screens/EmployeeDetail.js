import { useEffect, useState } from "react";

import {
  Table,
  TableCell,
  TableRow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import ListGroup from 'react-bootstrap/ListGroup';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import {
  MailOutline as MailOutlineIcon,
  DesktopMac as DesktopMacIcon,
  Language as LanguageIcon,
  LocationOn as LocationOnIcon,
  QueryBuilder as QueryBuilderIcon,
  Close as CloseIcon
} from "@material-ui/icons";


import { useLocation, useHistory } from "react-router-dom";

import Loading from "./Loading";

// class for data processing
import { EmployeeClassConverter } from "../data/EmployeeClass";

// firebase stuff
import firebase from "firebase/app";
import "firebase/firestore";

// css
import "../styles/common.scss";
import img from "../data/user.jpg";

export default function EmployeeDetail() {
  const db = firebase.firestore();
  const location = useLocation();
  const userId = location.state.key;
  const [data, setData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    db.collection("employees")
      .doc(userId)
      .withConverter(EmployeeClassConverter)
      .get()
      .then((snapshot) => {
        setData(snapshot.data());
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    return () => {};
  }, []);

  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <div className="pageWithNav userProfile">
          <div>
            <img src={img} alt="user profile" />
            <div>
                <ListItemIcon className="closeButton" onClick={() => history.goBack()}>
                    <CloseIcon fontSize="large" />
                </ListItemIcon>
              <h1>{data.full_name} </h1>

              {/* <Row>
                <Col>
                <DesktopMacIcon />
                  {data.role}
                </Col>
                <Col>
                <MailOutlineIcon />
                {data.email}
                </Col>
                <Col>
                <LanguageIcon />
                {data.language.map((key, value) => {
                      return value + 1 !== data.language.length
                        ? key + ", "
                        : key;
                    })}
                </Col>
              </Row>

              <Row>
                <Col>
                <LocationOnIcon />
                {data.city + ", " + data.province}
                </Col>
                <Col>
                <QueryBuilderIcon />
                "Local Time: 10:00am, Wed, 24 Feb 2021"
                </Col>
                <Col>
                </Col>
              </Row> */}

              
               <List>
                <ListItem>
                  <ListItemIcon>
                    <DesktopMacIcon />
                  </ListItemIcon>
                  <ListItemText primary={data.role} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MailOutlineIcon />
                  </ListItemIcon>
                  <ListItemText primary={data.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LanguageIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={data.language.map((key, value) => {
                      return value + 1 !== data.language.length
                        ? key + ", "
                        : key;
                    })}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={data.city + ", " + data.province} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <QueryBuilderIcon />
                  </ListItemIcon>
                  <ListItemText primary="Local Time: 10:00am, Wed, 24 Feb 2021" />
                </ListItem>
              </List>
            </div>
          </div>

          <Table className="table">
            <TableRow>
              <TableCell variant="head">
                <b>Full Name</b>
              </TableCell>
              <TableCell>{data.full_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <b>Email</b>
              </TableCell>
              <TableCell>{data.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <b>Personal Phone</b>
              </TableCell>
              <TableCell>{data.personal_phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <b>Emergency Contact</b>
              </TableCell>
              <TableCell>{data.emergency_contact}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <b>Date of Birth</b>
              </TableCell>
              <TableCell>{data.date_of_birth}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <b>Mailing Address</b>
              </TableCell>
              <TableCell>{data.mailing_address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">
                <b>Physical Address</b>
              </TableCell>
              <TableCell>{data.physical_address}</TableCell>
            </TableRow>
          </Table>
        </div>
      )}
    </>
  );
}
