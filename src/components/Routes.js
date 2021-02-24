import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// user provider
import { useUser } from "../providers/UserProvider";

// screens
import Dashboard from "../screens/Dashboard";
import Employees from "../screens/Employees";
import Payroll from "../screens/Payroll";
import Documents from "../screens/Documents";
import AddEmployee from "../screens/AddEmployee";
import EmployeeDetail from "../screens/EmployeeDetail";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Loading from "../screens/Loading";

// components
import NavBar from "./NavBar";
import HeaderBar from "./HeaderBar";

function Routes() {
  const user = useUser().user;
  const load = useUser().load;

  return (
    <>
      {!load ? (
        <Loading />
      ) : user ? (
        <Router>
          <NavBar />
          <HeaderBar />
          <Switch>
            <Route path="/employees">
              <Employees />
            </Route>
            <Route path="/payroll">
              <Payroll />
            </Route>
            <Route path="/documents">
              <Documents />
            </Route>
            <Route path="/profile">
              <EmployeeDetail />
            </Route>
            <Route path="/addemployee">
              <AddEmployee />
            </Route>
            <Route path="*" component={Dashboard} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="*">
              <Login />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default Routes;
