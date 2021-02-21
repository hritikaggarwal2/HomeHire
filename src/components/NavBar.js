import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div
        style={{
            padding: "10px",
            width: "10%",
            background: "#f0f0f0"
        }}
        >
        <ul style={{ listStyleType: "none" }}>
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