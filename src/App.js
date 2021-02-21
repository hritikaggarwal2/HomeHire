import "./App.css";
import Dashboard from "./screens/Dashboard";
import Employees from "./screens/Employees";
import Payroll from "./screens/Payroll";
import Documents from "./screens/Documents";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", alignItems: "stretch", height: "100%" }}>
        <NavBar></NavBar>

        <Switch>
          <Route path="/HomeHire">
            <Dashboard />
          </Route>
          <Route path="/Employees">
            <Employees />
          </Route>
          <Route path="/Payroll">
            <Payroll />
          </Route>
          <Route path="/Documents">
            <Documents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
