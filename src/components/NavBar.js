import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div
        style={{
            padding: 0,
            width: "10%",
            background: "#3f51b5"
        }}
        >
        <ul style={{ listStyleType: "none" }}>
            <li>
                <h3>HomeHire</h3>
            </li>
            <li>
                <Link to="/HomeHire">Dashboard</Link>
            </li>
            <li>
                <Link to="/Employees">Employees</Link>
            </li>
            <li>
                <Link to="/Payroll">Payroll</Link>
            </li>
            <li>
                <Link to="/Documents">Documents</Link>
            </li>
        </ul>
        </div>
    )
}

export default NavBar;