import React from "react";
import {
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Button,
} from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons/";
import LaunchIcon from "@material-ui/icons/Launch";

import "./Dashboard.css";

export default class Dashboard extends React.Component {
  state = {
    numOnboarding: 1,
  };

  componentDidMount() {
    let addEmployee = false;
    if (this.props.location.state) {
      addEmployee = this.props.location.state.addEmployee;
    }
    if (addEmployee) {
      this.setState((state) => {
        // Important: read `state` instead of `this.state` when updating.
        return { numOnboarding: state.numOnboarding + 1 };
      });
    }
  }

  render() {
    let numOnboarding = this.state.numOnboarding;
    let numHired = 2;
    let numTotal = numOnboarding + numHired;
    return (
      <div className="pageWithNav dashboard">
        <Grid container style={{ "padding-left": "2%", "padding-right": "2%" }}>
          <Grid item xs={12}>
            <h1>Dashboard</h1>
            <Card style={{ "background-color": "#F5F5F5" }}>
              <Grid
                container
                item
                spacing={3}
                style={{ "padding-left": "2%", "padding-right": "2%" }}
              >
                <Grid item xs={3}>
                  <h4>Total teams</h4>
                  <p className="big-number">1</p>
                </Grid>
                <Grid item xs={3}>
                  <h4>Total employees</h4>
                  <p className="big-number">{numTotal}</p>
                </Grid>
                <Grid item xs={3}>
                  <h4>Currently onboarding</h4>
                  <p className="big-number">{numOnboarding}</p>
                </Grid>
                <Grid item xs={3}>
                  <h4>Needs attention</h4>
                  <p className="big-number">0</p>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid container xs={12} spacing={3} alignItems="stretch">
            <Grid item xs={6}>
              <h3>Activity Report</h3>
              <Card
                style={{
                  "background-color": "#F5F5F5",
                  height: "85%",
                  padding: "5%",
                }}
              >
                <List>
                  <ListItem>
                    <ListItemText
                      primary="2 contracts have been changed"
                      secondary="Due to international policy changes, two of your..."
                    />
                    <ListItemSecondaryAction>
                      <Button variant="contained">
                        <LaunchIcon />
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemText
                      primary="Ryan has signed his offer letter"
                      secondary="Signed on 02/21/2021"
                    />
                    <ListItemSecondaryAction>
                      <Button variant="contained">
                        <LaunchIcon />
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
                <Divider></Divider>
                <div>
                  <p>
                    To date, by using GoGlobal you have saved:
                    <ol>
                      <li>$12,000 in legal fees</li>
                      <li>34 hours of labor</li>
                      <li>
                        <a href="">
                          See more statistics{" "}
                          <LaunchIcon style={{ fontSize: "1em" }} />
                        </a>
                      </li>
                    </ol>
                  </p>
                </div>
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
                        <Button variant="contained">
                          <LaunchIcon />
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <AccountCircle />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Jamie Cho"
                        secondary="Collecting employee information"
                      />
                      <ListItemSecondaryAction>
                        <Button variant="contained">
                          <LaunchIcon />
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemAvatar>
                        <AccountCircle />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Tyler Samson"
                        secondary="Reviewing contracts"
                      />
                      <ListItemSecondaryAction>
                        <Button variant="contained">
                          <LaunchIcon />
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <h3>Notifications</h3>
              </Grid>
              <Grid item xs={12}>
                <Card style={{ "background-color": "#F5F5F5", height: "100%" }}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="GoGlobal will be expanding to Ontario in Q3!"
                        secondary="After successfully building out in British Columbia..."
                      />
                      <ListItemSecondaryAction>
                        <Button variant="contained">See More</Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                      <ListItemText
                        primary="See some of our latest reviews and featured hires!"
                        secondary="Through GoGlobal, Ryan Gosling was finally able to..."
                      />
                      <ListItemSecondaryAction>
                        <Button variant="contained">See More</Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
