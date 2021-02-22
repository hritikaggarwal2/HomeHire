import HeaderBar from "../components/HeaderBar.js";

import {Card} from '@material-ui/core';
import {Grid} from '@material-ui/core';

import './Dashboard.css';

function Dashboard() {
  return (
    <div class="dashboard" style={{ width: "90%"}}>
      <HeaderBar/>
      <Grid container style={{ "padding-left": "2%", "padding-right": "2%" }} >
        <Grid item xs = {12}>
          <h2>Dashboard</h2>
          <Card style={{ "background-color": "#F5F5F5"}}>
            <Grid container item spacing={3} style={{ "padding-left": "2%", "padding-right": "2%" }}>
              <Grid item xs={3}>
                <h4>Total team</h4>
                <p class="big-number">3</p>
              </Grid>
              <Grid item xs={3}>
                <h4>Total employees</h4>
                <p class="big-number">3</p>
              </Grid>
              <Grid item xs={3}>
                <h4>Currently onboarding</h4>
                <p class="big-number">2</p>
              </Grid>
              <Grid item xs={3}>
                <h4>Some other stat</h4>
                <p class="big-number">xx</p>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid container xs={12} spacing={3}>
          <Grid item xs={6} >
            <h3>Activity</h3>
            <Card style={{ "background-color": "#F5F5F5"}}>
              activity stuff
            </Card>
          </Grid>
          <Grid container item xs={6} >
            <Grid item xs={12}>
            <h3>Onboarding status</h3>
              <Card style={{ "background-color": "#F5F5F5"}}>
                stuff
              </Card>
            </Grid>
            <Grid item xs={12}>
            <h3>Something??</h3>
            <Card style={{ "background-color": "#F5F5F5"}}>
              something stuff
            </Card>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default Dashboard;
