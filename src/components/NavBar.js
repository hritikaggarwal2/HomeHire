import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="nav-custom">
      <h3>Minerva</h3>
      <ul>
        <li className={props.index === 0 ? "item-selected" : ""}>
          <Link to="./">Dashboard</Link>
        </li>
        <li className={props.index === 1 ? "item-selected" : ""}>
          <Link to="./payroll">Payroll</Link>
        </li>
        <li className={props.index === 2 ? "item-selected" : ""}>
          <Link to="./employees">Employees</Link>
        </li>
        <li className={props.index === 3 ? "item-selected" : ""}>
          <Link to="./documents">Documents</Link>
        </li>
        <li className={props.index === 4 ? "item-selected" : ""}>
          <Link to="./documents">Settings</Link>
        </li>
      </ul>
    </div>
  );
}
