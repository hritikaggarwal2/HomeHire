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
import ViewOffer from "../screens/ViewOffer";
import GenerateOffer from "../screens/GenerateOffer";

// components
import PageWithNav from "../components/PageWithNav";

function Routes() {
  const user = useUser().user;
  const load = useUser().load;

  return (
    <>
      {!load ? (
        <Loading />
      ) : user ? (
        <Router>
          <Switch>
            <Route path="/employees">
              <PageWithNav index={2} page={"dashboard"}>
                <Employees />
              </PageWithNav>
            </Route>
            <Route path="/payroll">
              <PageWithNav index={1} page={"dashboard"}>
                <Payroll />
              </PageWithNav>
            </Route>
            <Route path="/documents">
              <PageWithNav index={3} page={"dashboard"}>
                <Payroll />
              </PageWithNav>
            </Route>
            <Route path="/profile">
              <EmployeeDetail />
            </Route>
            <Route path="/addemployee">
              <PageWithNav index={0} page={"employee"}>
                <AddEmployee />
              </PageWithNav>
            </Route>
            <Route path="/offer">
              <GenerateOffer />
            </Route>
            <Route path="/myoffer">
              <ViewOffer />
            </Route>
            <Route path="*">
              <PageWithNav index={0} page={"dashboard"}>
                <Dashboard />
              </PageWithNav>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Router>
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/*">
              <Login />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default Routes;
