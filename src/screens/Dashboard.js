import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Button,
} from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div class="dashboard">
      <Grid container style={{ "padding-left": "2%", "padding-right": "2%" }}>
        <Grid item xs={12}>
          <h2>Dashboard</h2>
          <Card style={{ "background-color": "#F5F5F5" }}>
            <Grid
              container
              item
              spacing={3}
              style={{ "padding-left": "2%", "padding-right": "2%" }}
            >
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
                <h4>Needs attention</h4>
                <p class="big-number">0</p>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid container xs={12} spacing={3} alignItems="stretch">
          <Grid item xs={6}>
            <h3>Activity</h3>
            <Card style={{ "background-color": "#F5F5F5", height: "85%" }}>
              activity stuff
            </Card>
          </Grid>
          <Grid container item xs={6} alignItems="stretch">
            <Grid item xs={12}>
              <h3>Onboarding status</h3>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ "background-color": "#F5F5F5", height: "100%" }}>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <AccountCircle />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Jamie Cho"
                      secondary="Reviewing contracts"
                    />
                    <ListItemSecondaryAction>
                      <Button variant="contained">View details</Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <AccountCircle />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Jamie Cho"
                      secondary="Collecting employee information"
                    />
                    <ListItemSecondaryAction>
                      <Button variant="contained">View details</Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <AccountCircle />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Tyler Samson"
                      secondary="Reviewing contracts"
                    />
                    <ListItemSecondaryAction>
                      <Button variant="contained">View details</Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <h3>Something else</h3>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ "background-color": "#F5F5F5", height: "100%" }}>
                something stuff
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
