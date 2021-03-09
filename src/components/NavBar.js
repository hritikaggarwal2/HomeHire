import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="nav-custom">
      <h3>Minerva</h3>
      {props.type !== 2 ? (
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
            <Link to="./documents">Legal Documents</Link>
          </li>
          <li className={props.index === 4 ? "item-selected" : ""}>
            <Link to="./settings">Preferences</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className={props.index === 0 ? "item-selected" : ""}>
            <Link to="./">Dashboard</Link>
          </li>
          <li className={props.index === 1 ? "item-selected" : ""}>
            <Link to="./profile">Profile</Link>
          </li>
          <li className={props.index === 2 ? "item-selected" : ""}>
            <Link to="./expenses">Expenses</Link>
          </li>
          <li className={props.index === 3 ? "item-selected" : ""}>
            <Link to="./benefits">Benefits</Link>
          </li>
          <li className={props.index === 4 ? "item-selected" : ""}>
            <Link to="./timeoff">Time Off</Link>
          </li>
          <li className={props.index === 5 ? "item-selected" : ""}>
            <Link to="./documents">Documents</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
