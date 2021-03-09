import { useEffect, useState } from "react";
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

// firebase
import firebase from "firebase/app";

// class for data processing
import { EmployeeClassConverter } from "../data/EmployeeClass";

function Routes() {
  const user = useUser().user;
  const load = useUser().load;

  const db = firebase.firestore();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (user !== null) {
      console.log(user.email);

      db.collection("employees")
        .doc(user.uid)
        .withConverter(EmployeeClassConverter)
        .onSnapshot(
          (snapshot) => {
            setData(snapshot.data());
          },
          (error) => {
            console.log("Error getting document:", error);
          }
        );
    }

    return () => {};
  }, [user]);

  return (
    <>
      {!load || (user != null && data === null) ? (
        <Loading />
      ) : user ? (
        data.isEmployee ? (
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
              <Route path="/profile">
                {/* idk what the index means  */}
                <PageWithNav back={true} index={4} page={"nonav"}>
                  <EmployeeDetail />
                </PageWithNav>
              </Route>
              <Route path="/addemployee" >
                <PageWithNav index={0} page={"nonav"}>
                  <AddEmployee />
                </PageWithNav>
              </Route>
              <Route path="/offer">
                <PageWithNav index={0} page={"nonav"}>
                  <GenerateOffer />
                </PageWithNav>
              </Route>
              <Route path="*">
                <PageWithNav index={0} page={"dashboard"}>
                  <Dashboard user={data} employerView={true} />
                </PageWithNav>
              </Route>
            </Switch>
          </Router>
        ) : !data.isVerified ? (
          <Router>
            <Switch>
              <Route path="*">
                <ViewOffer user={data} uid={user.uid} />
              </Route>
            </Switch>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route path="/documents">
                <PageWithNav type={2} index={5} page={"employee"}>
                  <Documents />
                </PageWithNav>
              </Route>
              <Route path="/profile">
                <PageWithNav type={2} index={1} page={"employee"}>
                  <EmployeeDetail uid={user.uid} />
                </PageWithNav>
              </Route>
              <Route path="/myoffer">
                <PageWithNav type={2} index={0} page={"nonav"}>
                  <ViewOffer />
                </PageWithNav>
              </Route>
              <Route path="*">
                <PageWithNav type={2} index={0} page={"employee"} noAddEmployee={true}>
                  <Dashboard user={data} employerView={false} />
                </PageWithNav>
              </Route>
            </Switch>
          </Router>
        )
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
