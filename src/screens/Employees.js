import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

// class for data processing
import { EmployeeClassConverter } from "../data/EmployeeClass";

// firebase stuff
import firebase from "firebase/app";
import "firebase/firestore";

export default function Employees() {
  const db = firebase.firestore();
  const [emps, setEmps] = useState({});
  const history = useHistory();

  // FOR ADDING DATA TO FIRESTORE
  // db.collection("employees")
  //   .doc()
  //   .withConverter(EmployeeClassConverter)
  //   .set(
  //     new EmployeeClass(
  //       "Ryan Thomas Gostling",
  //       "ryan.gosling@lalalland.com",
  //       "Principal Engineer",
  //       "November 12, 1980",
  //       ["English", "French"],
  //       "London",
  //       "Ontario",
  //       "Canada",
  //       "+1(250)555-0199",
  //       "+1(250)660-2345",
  //       "3616 Dundas St., London, Ontario, N6B 3L5",
  //       "4086 René-Lévesque Blvd., Montreal, Québec, H3B 4W8"
  //     )
  //   );

  useEffect(() => {
    db.collection("employees")
      .withConverter(EmployeeClassConverter)
      .get()
      .then((snapshot) => {
        const newEmps = {};
        snapshot.forEach((doc) => {
          newEmps[doc.id] = doc.data();
        });

        setEmps(newEmps);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

    return () => {};
  }, []);

  function handleItemClick(key) {
    history.push({
      pathname: "/profile",
      state: {
        // location state
        key,
      },
    });
  }

  return (
    <div className="pageWithNav emps">
      <h1>Current Employees</h1>
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(emps).map((key, value) => {
            return (
              <TableRow key={key} onClick={() => handleItemClick(key)}>
                <TableCell>{emps[key].full_name}</TableCell>
                <TableCell>{emps[key].department}</TableCell>
                <TableCell>{emps[key].role}</TableCell>
                <TableCell>{emps[key].status}</TableCell>
                <TableCell>{emps[key].start_date}</TableCell>
                <TableCell>
                  {emps[key].city + ", " + emps[key].province}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
