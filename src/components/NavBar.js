import React from "react";
import { Link } from "react-router-dom";
import "../styles/common.scss";

export default function NavBar(props) {
  return (
    <div className="nav">
      <ul>
        <li>
          <h3>Minerva</h3>
        </li>
        <li className={props.index === 0 ? "primary-dark" : ""}>
          <Link to="./">Dashboard</Link>
        </li>
        <li className={props.index === 1 ? "primary-dark" : ""}>
          <Link to="./employees">Employees</Link>
        </li>
        <li className={props.index === 2 ? "primary-dark" : ""}>
          <Link to="./payroll">Payroll</Link>
        </li>
        <li className={props.index === 3 ? "primary-dark" : ""}>
          <Link to="./documents">Documents</Link>
        </li>
      </ul>
    </div>
  );
}
